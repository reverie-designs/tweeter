$(function() {
  $(".error-msg").hide();
  $(".new-tweet").hide();
  $(".reveal-tweet , .icon-top").on("click", () => {
    $(".new-tweet").slideToggle("slow");
    $("#tweet-form > textarea").focus();
  });
});
