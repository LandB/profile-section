/*
====================
   CALL FUNCTIONS
====================
*/

$(function() {
  console.log('ready!');

  portfolioSideBar();
  chatSideBar();
  animatedScrollBar();

});


/*
====================
     FUNCTIONS
====================
*/



function portfolioSideBar(){
  $('.profile-options--showcase').on('click', function(){
    $('.profile-box--profile').removeClass('negativeActive');
    $('.profile-box--chat').removeClass('active');
    $('.profile-options--chat').removeClass('active');
    $('.profile-box--portfolio').toggleClass('active');
    $('.profile-box--profile').toggleClass('active');
    $('.profile-box--back-arrow').toggleClass('active');
    $('.profile-options--showcase').toggleClass('active');

  });
}


function chatSideBar(){
  $('.profile-options--chat').on('click', function(){

    $('.profile-box--portfolio').removeClass('active');
    $('.profile-box--profile').removeClass('active');
    $('.profile-box--back-arrow').removeClass('active');
    $('.profile-options--showcase').removeClass('active');


    $('.profile-box--chat').toggleClass('active');
    $('.profile-box--profile').toggleClass('negativeActive');
    $('.profile-options--chat').toggleClass('active');
  });
}




function animatedScrollBar(){
  $('.profile-box--portfolio').on('mouseover', function(){
    $('::-webkit-scrollbar').fadeIn();
  })
}
