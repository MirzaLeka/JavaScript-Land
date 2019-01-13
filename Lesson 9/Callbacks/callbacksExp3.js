
// Now it's time for a sequence of callbacks that will result in creating callback hell
// Then we'll clear it up a little bit

// Example: Get a list of friends from friend.json, followed by list of tweets and finally list of videos all grouped in one callback

$.ajax({
    type: 'GET',
    url: 'data/friends.json',
    success(data) {
      console.log(data);

      $.ajax({
        type: 'GET',
        url: 'data/tweets.json',
        success(data) {
          console.log(data);

          $.ajax({
            type: 'GET',
            url: 'data/videos.json',
            success(data) {
              console.log(data);
            },
            error (err) {
              console.log(err)  
            }
        });

        },
        error (err) {
          console.log(err)  
        }
    });

    },
    error (err) {
      console.log(err)  
    }
});

// Now we have a triangle of death, commonly known as callback hell, callback after callback after callback
// This is very difficult to maintain and even worse to look at


// Let's kick things of by handling errors. We'll create a function handleErrors() and then asign it to every error statement

function handleErrors(error) {
   console.log(error);
}

$.ajax({
    type: 'GET',
    url: 'data/friends.json',
    success(data) {
      console.log(data);

      $.ajax({
        type: 'GET',
        url: 'data/tweets.json',
        success(data) {
          console.log(data);

          $.ajax({
            type: 'GET',
            url: 'data/videos.json',
            success(data) {
              console.log(data);
            },
            error: handleErrors
        });

        },
        error: handleErrors
    });

    },
    error: handleErrors
});


// Next thing we can do is seperate ajax requests into unique functions, like getTweets()
// We can do te same for videos

// No need to redeclare this function. I'm just doing it for the case of example

function handleErrors(error) {
    console.log(error);
 }
 
 $.ajax({
     type: 'GET',
     url: 'data/friends.json',
     success: getTweets(),
     error: handleErrors
 });

 function getTweets(data) {
    console.log(data);

    $.ajax({
      type: 'GET',
      url: 'data/tweets.json',
      success: getVideos(),
      error: handleErrors
  });

}

function getVideos(data) {
    console.log(data);

    $.ajax({
      type: 'GET',
      url: 'data/videos.json',
      success(data) {
        console.log(data);
      },
      error: handleErrors
  });

  }

  // That's it. Triangle is gone and everything looks like synchronous code.
  // But there is a better way of dealing with the sequence of callbacks and that is using Promises.
  