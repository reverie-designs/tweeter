$(window).scroll(function() {
  const height = $(window).scrollTop();
  if (height > 100) {
    $('.icon-top').fadeIn();
  } else {
    $('.icon-top').fadeOut();
  }
});

$(function() {
  $('.icon-top').hide();
});