//jQuery

$(function() {

  let $tweet = ".new-tweet > form > textarea";
  let $tweetCounter = $tweet + "~" + ".counter";

  $($tweet).on('keyup', () => {

    let $textArea = $(".new-tweet > form > textarea").val();
    let $textLength = 140 - $textArea.length;
    
    //update character counter html
    $($tweetCounter).html($textLength);

    //turn counter red if it hits below zero by adding a class to it
    if($textLength < 0){
      $($tweetCounter).addClass("turnRed");
    }
    if($textLength > 0) {
      $($tweetCounter).removeClass("turnRed");
    }
  });

});