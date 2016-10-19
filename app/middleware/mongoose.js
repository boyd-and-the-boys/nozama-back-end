'use strict';

const mongoose = require('mongoose');

let uri;
if (process.env.NODE_ENV === 'production') {
  uri = 'mongodb://localhost/boyd-and-the-boys';
}

mongoose.Promise = global.Promise;
mongoose.connect(uri);

module.exports = mongoose;
