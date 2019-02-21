
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


   async function fetchUsers() {

    try {
       
       const res = await fetch('jsonplaceholder.typicode.com/users'); // this returns a promise
       const data = await res.json(); // wait for this to be done as well
       console.log(data); // we are playing with data because we know that fetch returns a promise and then we need to convert that promise into data

    } catch (error) {
        console.log(error); // checking for errors
    }

   }

   fetchUsers();
