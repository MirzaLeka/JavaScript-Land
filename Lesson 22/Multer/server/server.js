const express = require('express'),
app = express(),
path = require('path'),
multer = require('multer');
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
      res.send(req.file);
    }
  })
})


app.get('/image', (req, res) => {
  // res.sendFile(path.join(__dirname, `../web/uploads/${imageName}`));
  res.sendFile(path.join(__dirname, `../web/uploads/myImage-1550268286458.jpg`));
})

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
