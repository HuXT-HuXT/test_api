const Movie = require('../models/photo');
const fileUpload = require('express-fileupload');

const addPhoto = (req, res, next) => {
  try {
    if (!req.files) {
      res.status(400).send({
        message: 'No file attached'
      });
    } else {
      let photo = req.files.photo;
      let path = '../../upload' + photo.name
      const { name } = req.body;
      photo.mv(path);

      Movie.create({
        name,
        path,
      })
        .then((photo) => {
          res.send(photo);
        })
        .catch((err) => {
          res.send('mongoError:', err);
        })
    }
  } catch (err) {
    res.status(500).send('express-upload_error:',err);
  };
};