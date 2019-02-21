
// Using simple examples we'll cover eveyrthing from callbacks to Async Await

// Data we'll be using

let posts = [
 { title: 'Post one', body: 'post body' },
 { title: 'Post two', body: 'post body' }
];

// Callbacks way of manipulating the data

function getPosts() {
  setTimeout(() => {
      posts.map(post => console.log(post.title)); 
  }, 1000);
}

function createPost(newPost, callback) {
  setTimeout(() => {
      posts.push(newPost);
      callback();
  }, 2000)
}

createPost({titie: 'Post three', body: 'post body'}, getPosts);


