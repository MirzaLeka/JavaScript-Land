
// Data we'll be using

let posts = [
    { title: 'Post one', body: 'post body' },
    { title: 'Post two', body: 'post body' }
   ];
   
   // Async Await way of manipulating the data
   
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
   
// Async await is just a different way of handling data. Everything from promises example will stay as above

async function init() {
    await createPost({title: 'Post three', body: 'post body'}); // we are waiting for this to be done and then we execute next line of code

    getPosts();
}

init();

// And that's it
