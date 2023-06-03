$(document).ready(function() {
    $(".header__nav__burger__menu").click(function() {
      $(this).toggleClass("active");
      $('.header__nav__menu').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });