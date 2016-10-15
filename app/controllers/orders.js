'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Order = models.order;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Order.find()
  .then(orders => res.json({ orders }))
  .catch(err => next(err));
};

const show = (req, res, next) => {
};

const create = (req, res, next) => {
  let order = Object.assign(req.body.order, {
    _owner: req.currentUser._id,
  });
  Order.create(order)
    .then(order => res.json({ order }))
    .catch(err => next(err));
};
};

const update = (req, res, next) => {
};

const destroy = (req, res, next) => {
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: authenticate, except: ['index', 'show'] },
], });
