const express = require('express'),
app = express(),
path = require('path'),
multer = require('multer'),
mongoose = require('./Db/mongoose'),
Image = require('./model/imageModel'),

publicFolder = path.join(__dirname, '../web');

// Body Parser JSON
app.use(express.json());

app.use(express.static(publicFolder, {
  extensions: ['html', 'htm']
}));



// set the storage engine
const storage = multer.diskStorage({
  destination: `${publicFolder}/uploads`,
  filename (req, file, cb) {
    const imageName =  + req.body.name  + '-' + Date.now() + path.extname(req.body.name);
    cb(null, imageName);
  }
});


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

    res.send('oh noes')

      // const pathArray = req.file.path.split('\\');

      // const link = '/' + pathArray.splice(pathArray.indexOf('uploads')).join('/');

      // const image = new Image({
      //   url: link
      // });

      // image.save().then((uploadedImage) => {

      //   res.send(uploadedImage); 

      // }).catch((e) => {
      //   res.status(400).send(e);
      // })

  })
})


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
