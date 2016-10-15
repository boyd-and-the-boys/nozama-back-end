'use strict';

const mongoose = require('mongoose');

const selectedProductSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
    enum: ['S', 'M', 'L', 'XL']
   },
   _owner: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User',
     required: true,
   },
   _order: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Order',
     required: true,
   },
   _product: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Product',
     required: true,
   },
  }, {
    timestamps: true,
});

const SelectedProduct = mongoose.model('SelectedProduct', selectedProductSchema);

module.exports = SelectedProduct;
