
  fetch('/image')
  .then(res => res.blob())
  .then(image => {
    // Then create a local URL for that image and print it 
    outside = URL.createObjectURL(image)
    console.log(outside)
  });
