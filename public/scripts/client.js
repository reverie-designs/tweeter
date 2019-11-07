//client.js

//function that converts input data to text protecting from script injection
const escape = function(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//function that gets time out of the tweet object and subtracts it from today's date - returns value in days
const getTimeOfTweet = (milsecs) => {
  let result = [];
  const today = new Date();
  const timeAgo = (today - milsecs) / 86400000;
  
  result.push(Math.ceil(timeAgo));

  //adds an 's' if it has been more than a single day ago
  if (toString(result[0]).length > 1 || result[0] !== 1) {
    result.push('s');
  }
  return result;
};

// Creates Tweet Article Element with the data rendered from Json Object
const createTweetElement = (tweetObject)=> {
  let timeAgo = getTimeOfTweet(tweetObject.created_at);
  const $tweet = `
    <article class="tweet">
      <header>
          <img class="user-image" src="${escape(tweetObject.user.avatars)}" alt="profile image of ${escape(tweetObject.user.name)}">
          <p>
            <span class="user-name">${escape(tweetObject.user.name)}</span>
            <span class="tweet-tag">${escape(tweetObject.user.handle)}</span>
          </p>
      </header>
      <p class="tweet-message">${escape(tweetObject.content.text)}</p>
      <footer>
        <span>${timeAgo[0]} day${timeAgo[1]}</span>
        <span class="tweet-icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-heart"></i>
          <i class="fas fa-retweet"></i>
        </span>
      </footer>
    </article>`;
  return $tweet;
};

//for every tweet in tweetDatabase create an html element and append it to the body
const renderTweets = (tweetDatabase) => {
  for (let tweet of tweetDatabase) {
    $("#get-tweets").append(createTweetElement(tweet));
  }
};

//returns error message if the tweet input form is empty or exceeds character limit
const checkValueOfTweetInput = (input) => {
  if (input === '' || input === null) {
    return 'please enter a tweet';
  }
  if (input.length > 140) {
    return 'your tweet has exceeded the character limitations. Please adjust your tweet to submit';
  }
};

//Function clears the tweet form and delivers the newest tweet to the bottom of the page
const loadNewTweet = () => {
  //clears form and hides error
  $('#tweet-form > textarea').val('');

  //gets the latest tweet and appends it to the page
  $.ajax('/tweets/', { method: 'GET' })
    .then(function(getTweets) {
      let newTweet = [];
      newTweet.push(getTweets[getTweets.length - 1]);
      renderTweets(newTweet);
    });
};


//jQuery rendering of tweets
$(function() {

  //ajax add tweet to database on submit
  $('#tweet-form').on('submit', function(event) {
    event.preventDefault();
    const input = $('#tweet-form > textarea').val();
    if (checkValueOfTweetInput(input)) {
      const errorMsg = checkValueOfTweetInput(input);
      $(".error").empty();
      $(".error").append(`${errorMsg}`);
      $(".error-msg").slideDown("slow");
    } else {
      //get tweet data
      $.ajax({
        url : '/tweets/',
        type: 'POST',
        data : $(this).serialize()
      })
        .then(() => {
          $(".error-msg").slideUp();
          loadNewTweet();
          $(".new-tweet").slideUp("slow");
        });
    }
  });

  //ajax get tweet from database on page load
  $.ajax('/tweets/', { method: 'GET' })
    .then(function(getTweets) {
      renderTweets(getTweets);
    });
  
});