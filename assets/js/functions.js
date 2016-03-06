/*
====================
   CALL FUNCTIONS
====================
*/

$(function() {
  console.log('ready!');

  portfolioSideBar();
  chatSideBar();

});


/*
====================
     FUNCTIONS
====================
*/



function portfolioSideBar(){
  $('.profile-options--showcase, .mobile-back-btn--portfolio').on('click', function(){
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
  $('.profile-options--chat, .mobile-back-btn--chat').on('click', function(){
    $('.profile-box--portfolio').removeClass('active');
    $('.profile-box--profile').removeClass('active');
    $('.profile-box--back-arrow').removeClass('active');
    $('.profile-options--showcase').removeClass('active');
    $('.profile-box--chat').toggleClass('active');
    $('.profile-box--profile').toggleClass('negativeActive');
    $('.profile-options--chat').toggleClass('active');
  });
}
