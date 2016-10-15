'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  dateOrdered: {
    type: Date,
    required: true,
  },
  _id: {
    type: mongoose.Schema.TypesObjectsId,
    ref: 'User',
    required: true,
  },
  isComplete: {
    type: Boolean,
    required: true,
   },
  }, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
