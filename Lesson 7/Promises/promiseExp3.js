
// It's time for the real deal. We have a promise and a sequence of callbacks.
// First we will setup the logic using xhr and then use .then() method to handle async requests


function get(url) {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();

        xhttp.open('GET', url, true); // true is for async code
        xhttp.onload = () => {
            if (xhttp.status == 200) {
               resolve(JSON.parse(xhttp.response)); // sends a list of friends, tweets, videos
            } else {
               reject(xhttp.statusText); // sends error
            }
        };
        
        xhttp.onerror = () => { // if browser supports promises it will suppoert onload and onerror for sure
            reject(xhttp.statusText);
        };

        xhttp.send();
    });
}

// Now it's time for requests

// As we se our get() function returns a promise which menas we can chain then() method to it
// Remember that we don't to pass url to get() function
const promise = get('data/friends.json')
.then(function(friends) {
  console.log(friends); // this function needs to return promise in other to call .then() on the second request
  return get('data/tweets.json'); // this time with new API
})
.then(function(tweets) {
  console.log(tweets);
  return get('data/videos.json') // returning for the final time
})
.then(function(videos) {
  console.log(videos);
  // nothing to return here. it's time to catch error
}).catch(function(error) {
  console.log(error);
});

// And that's how you do a Promise with a sequence of requests
