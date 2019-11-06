//client.js

//sample tweet database
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

//function that converts input data to text protecting from script injection
const escape = function(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//function that gets time out of the tweet object and subtracts it from today's date - returns value in days
const getTimeOfTweet = (milsecs) => {
  let result = [];
  const today = new Date();
  let timeAgo = (today - milsecs)/86400000;
  
  result.push(Math.ceil(timeAgo)); 

  //adds an 's' if it has been more than a single day ago
  if (toString(result[0]).length > 1 || result[0] !== 1) {
    result.push('s');
  }

  return result;
};

//jQuery rendering of tweets
$(function(){

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
    for(let tweet of tweetDatabase){
      $("#get-tweets").append(createTweetElement(tweet));
    }
  };

  renderTweets(data);
  
});