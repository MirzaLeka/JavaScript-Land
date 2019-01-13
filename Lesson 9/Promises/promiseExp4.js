 
 // Promise with jQuery

 // this is is an async call so it returns a promise right away
 $.get('data/friends.json').then(function(friends) {
     console.log(friends);
     return $.get('data/tweets.json'); // we are returining new async request so we can use .then()
 }).then(function(tweets) {
     console.log(tweets);
     return $.get('data/videos.json'); // again the same strategy
 }).then(function(videos) {
     console.log(videos);
 }).catch(function(error) {
     console.log(error);
 });

 
 // And that's it. It's just like fetch, but even smaller!
