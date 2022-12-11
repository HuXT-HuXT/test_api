//import_part
const mongoose = require('mongoose');
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = reuqire('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

// declaration_part
const PORT = 80;
mongoose.connect('mongodb://localhost:27017/testdb', {
  useNewUrlParser: true,
  autoIndex: true,
});
const app = express();

// app_setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
  createParentPath: true
}));

// run app
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
});