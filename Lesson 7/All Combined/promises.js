
// Data we'll be using

let posts = [
    { title: 'Post one', body: 'post body' },
    { title: 'Post two', body: 'post body' }
   ];
   
   // Promises way of manipulating the data
   
   function getPosts() {
     setTimeout(() => {
         posts.map(post => console.log(post.title)); 
     }, 1000);
   }
   
   function createPost(newPost) {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            posts.push(newPost);
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong')
            }

        }, 2000)
     })  
   }
   
   createPost({titie: 'Post three', body: 'post body'}) // pass new post (this returns a promise)
   .then(getPosts) // and once post is added run get posts
   .catch(err => console.log(err));
   