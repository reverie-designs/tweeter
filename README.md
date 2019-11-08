# Tweeter Project

Tweeter is a simple, responsive, single-page Twitter clone utilizing ajax and jQuery.

The app will generate a random user for each new tweet that you create.

Since this is a student project we can only afford to give you 140 characters for your tweet.
Enjoy!

## Final Product

!["Screeshot of Tweet App Desktop View"]()
!["Screenshot of Tweet App Mobile View"]()

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

1. Main front-end javascript file - client.js
2. Tweet form - form-animation.js
3. Character counter animation - composer-char-counter.js
4. Back to top button functionality - top-button.js

## Styles

1. layout.css - main page layout styles
2. nav.css - top bar styles
3. header.css - user box styles
4. new-tweet-form.css - create a new tweet form styles
5. tweets.css - loaded tweet styles


*** All other code has been previously provided by lighthouse labs for this project ***


