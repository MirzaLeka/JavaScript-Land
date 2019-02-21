const express = require('express'),
app = express(),
path = require('path'),
multer = require('multer'),
mongoose = require('./Db/mongoose'),
Image = require('./model/imageModel'),

publicFolder = path.join(__dirname, '../web');

app.use(express.static(publicFolder));



// set the storage engine
const storage = multer.diskStorage({
  destination: `${publicFolder}/uploads`,
  filename (req, file, cb) {
    const imageName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  }
});

// fieldName = input name attribute value
// originalName = name of the file we are uploading
// path.extname = returns extension. For example if we are working with file.txt, this would equal to txt

// Init upload
const upload = multer({
  storage,
  limits: { fileSize: 5 * 10 ** 6 }, // 5MB
  fileFilter (req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.send(err);
    } 
    // if you click upload without submiting an image
    if (req.file === undefined) {
      res.send('No image found');
    } else {

      // req.file.path is path to file,
      // but because this path contains > C:\\...Javascript30\\Lesson 22\\Multer\\Web\\Uploads\\filename,
      // what we want to do is cut things off and leave only /uploads folder and fileName

      // first we'll split path into array on \\
      const pathArray = req.file.path.split('\\');

      // what we get is an array and now we'll splice the initial part all the way to uploads ( indexOf(uploads) )
      // then we'll join everything into string again with '/' in between and append '/' before uploads

      const link = '/' + pathArray.splice(pathArray.indexOf('uploads')).join('/');

      // now we'll save the link to DB and fetch it on client side

      // creating an instance of Image model and assigning link variable to url property
      const image = new Image({
        url: link
      });

      // saving new image to DB (async task)
      image.save().then((uploadedImage) => {

        // sending JSON to user as a response
        res.send(uploadedImage); // we can also send text, like res.send('Uploaded');

        // catch any errors that might occur
      }).catch((e) => {
        res.status(400).send(e);
      })

      

    }
  })
})

// get all images from DB and send them to users
app.get('/images', async (req, res) => {

try {

  const images = await Image.find({});
  res.send(images);

} catch(e) {
  res.status(400).send(e);
}
  
});

function checkFileType(file, cb) {

  // Allowed file extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  
  if ( mimetype && extname ) {
    return cb(null,true);
  } 
  return cb('Error: Images Only!');
  
}


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
