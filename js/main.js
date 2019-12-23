$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
      $(".ck-header").addClass("ck-header--scrolled");
  } else {
      $(".ck-header").removeClass("ck-header--scrolled");
  }
});