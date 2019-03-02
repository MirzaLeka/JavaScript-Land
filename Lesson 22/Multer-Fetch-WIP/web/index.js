
function uploadFile() {

const input = document.querySelector('#fileInput');

// files is array of files OBJECTS we select on input. [0] is the first file we selected
console.log(input.files[0]);

const { name, size, type } = input.files[0];

if (size > 5 * 10 ** 6) {
  return alert('Max file size: 5MB!')
}

const postData = {
  name,
  size,
  type
}


fetch('/upload', { 
  method: 'POST',
  headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
  },
  body: JSON.stringify(postData) 
})
.then(res => res.json()) 
.then((data) => console.log('Posting new data', data))
.catch(err => console.log(err));

}

