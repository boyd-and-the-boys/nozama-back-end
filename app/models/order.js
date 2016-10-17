'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  dateOrdered: {
    type: Date,
    required: false,
  },
  isComplete: {
    type: Boolean,
    required: true,
   },
   _owner: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User',
     required: false,
   },
  }, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
