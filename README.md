# Tweeter Project

Tweeter is a simple, responsive, single-page Twitter clone utilizing ajax and jQuery.

The app will generate a random user for each new tweet that you create.

Since this is a student project we can only afford to give you 140 characters for your tweet.
Enjoy!

## Final Product

### Mobile View
<img src="https://github.com/reverie-designs/tweeter/blob/master/docs/tweet-mobile-view.png"  alt="Screenshot of Tweet App Mobile View" width="220">

### Desktop View
!["Screeshot of Tweet App Desktop View"](https://github.com/reverie-designs/tweeter/blob/master/docs/tweeter-desktop-view.png)


## Dependencies

- Node 5.10.x or above
- Express 4.17.x or above
- md5 2.2.1 or above
- Chance 1.1.3 or above
- Body-Parser 1.19 or above

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. From the repository directory start the web server using the `npm run local` command. 
4. The app will be served at <http://localhost:8080/>.
5. Go to <http://localhost:8080/> in your browser.
6. Click on the **Write a new tweet** toggle button to reveal the new tweet form.
7. Enter your tweet press the **TWEET** button, and watch as it gets added to the page.
8. As long as the server is runnning and has not restarted your tweets will continue to be added to the tweet roster below the form.


## Functions 

- `escape(str)`: converts user input into plain text and prevents script injection
- `getTimeOfTweet(miliseconds)`: function that recives time in miliseconds from the tweet object and subtracts it from today's date - returns and array with value in days and a possible s if more than single day has passed since the tweet
- `createTweetElement(tweetObject)`: function that takes in an object and returns an html tweet Article Element for the client side. 
- `renderTweets(tweetDatabase`: takes in an array of objects and for each one appends them using the callback function `createTweetElement`
- `chcheckValueOfTweetInput(input)`: takes in the input value from the new tweet form and returns an error message if it is emtpy or exceeds 140 characters
- `loadNewTweet()`: clears the tweet form and delivers the newest tweet to the page


## Scripts

1. _client.js_ - Main front-end javascript file
2. _form-animation.js_ - Tweet form
3. _composer-char-counter.js_ - Character counter animation
4. _top-button.js_ - Back to top button functionality

## Styles

1. _layout.css_ - main page layout styles
2. _nav.css_ - top bar styles
3. _header.css_ - user box styles
4. _new-tweet-form.css_ - create a new tweet form styles
5. _tweets.css_ - loaded tweet styles


** All other code has been previously provided by lighthouse labs for this project **

## Troubleshooting

Bear in mind there is a 4 second server side delay (on purpose) before the tweet is rendered
