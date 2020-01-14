// Header 
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
      $(".ck-header").addClass("ck-header--scrolled");
  } else {
      $(".ck-header").removeClass("ck-header--scrolled");
  }
});



// Sliders
$('.ck-dog-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});


$('.ck-feedback-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  // adaptiveHeight: true
});


// Collapse
$(".ck-collapse__btn").click(function(){
  $(this).parent('.ck-collapse').toggleClass('is-active');
  $(this).next().slideToggle('100');
});

// Mobile nav
$('.ck-burger').click(function() {
  $('.ck-header__nav').addClass('is-active');
});
$('.ck-close-nav').click(function() {
  $('.ck-header__nav').removeClass('is-active');
});