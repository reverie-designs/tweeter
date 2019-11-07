$(function(){
  $(".new-tweet").hide();
  $(".reveal-tweet").on("click", () => {
    $(".new-tweet").slideToggle("slow");
    $("#tweet-form > textarea").focus();
  })
});
