'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  dateOrdered: {
    type: Date,
    required: true,
  },
  isComplete: {
    type: Boolean,
    required: true,
   },
   _owner: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User',
     required: true,
   },
  }, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
