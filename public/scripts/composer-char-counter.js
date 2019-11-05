//jQuery

$(function() {
  //subtracts text area value from 140 on key up
  $(".new-tweet > form > textarea").on('keyup', () => {

    let $textArea = $(".new-tweet > form > textarea").val();
    let $textLength = 140 - $textArea.length;
    
    //turn counter red if it hits below zero by adding a class to it.
    $(".counter").html($textLength);
    if($textLength < 0){
      $(".counter").addClass("turnRed");
    }
    if($textLength > 0) {
      $(".counter").removeClass("turnRed");
    }
  });

});