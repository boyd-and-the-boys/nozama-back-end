'use strict';

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // size: {
  //   type: String,
  //   required: true,
  //   enum: ['S', 'M', 'L', 'XL']
  // },
  price: {
    type: Number,
    required: true
  },
  // _owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
}, {
  timestamps: true
});

// bookSchema.virtual('length').get(function length() {
//   return this.text.length;
// });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
