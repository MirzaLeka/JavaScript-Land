
// JavaScript Image Manipulation Program

const Jimp = require('jimp');
 
const editImage = () => {
  // open a file "flower.jpg" in Data folder  
  Jimp.read('Data/flower.jpg', (err, flower) => {
    if (err) throw err;
    flower
    .resize(256, 256) // resize
    .quality(60) // set JPEG quality
    .greyscale() // set greyscale
    .write('Dist/flower-edited.jpg'); // save
});
        
}

// async await
const editImageAsync = async () => {
  const flower = await Jimp.read('Data/flower.jpg'); 
  try {
    flower
    .crop(100, 50, 350, 280) // position x,y, width, height
    .contrast(-0.05)
    .opacity(0.5)
    .sepia()
    .flip(false, false)
    .write('Dist/flower-edited.jpg'); 
  } catch (e) {
    console.log(e);  
  }
}

editImageAsync();
