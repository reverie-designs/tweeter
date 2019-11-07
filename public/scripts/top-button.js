$(window).scroll(function() {
  const height = $(window).scrollTop();
  if (height > 90) {
    $('.icon-top').fadeIn();
    $('.tweet-toggle').fadeOut();
  } else {
    $('.tweet-toggle').fadeIn();
    $('.icon-top').fadeOut();
  }
});

$(function() {
  $('.icon-top').hide();
});