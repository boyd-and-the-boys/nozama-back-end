'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const SelectedProduct = models["selected-product"];

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  SelectedProduct.find().populate('_product').populate('_order')
  // .then(selectedProducts => selectedProducts.populate('_product'))
  .then(selectedProducts => res.json({ selectedProducts }))
  .catch(err => next(err));
};

const show = (req, res, next) => {
  SelectedProduct.findById(req.params.id)
    .then(selectedProduct => selectedProduct ? res.json({ selectedProduct }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let selectedProduct = Object.assign(req.body.selectedProduct, {
    _owner: req.currentUser._id,
  });
  SelectedProduct.create(selectedProduct)
    .then(selectedProduct => res.json({ selectedProduct }))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  SelectedProduct.findOne(search)
    .then(selectedProduct => {
      if (!selectedProduct) {
        return next();
      }
      delete req.body._owner;  // disallow owner reassignment.
      return selectedProduct.update(req.body.selectedProduct)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  SelectedProduct.findOne(search)
    .then(selectedProduct => {
      if (!selectedProduct) {
        return next();
      }
      return selectedProduct.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
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
