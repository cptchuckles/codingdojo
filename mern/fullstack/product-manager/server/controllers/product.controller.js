const Product = require("../models/product.model");

module.exports.getAll = (_, res) =>
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err, 400));

module.exports.getById = (req, res) =>
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(error => res.json({ error }, 404));

module.exports.create = (req, res) =>
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err, 400));

module.exports.update = (req, res) =>
    Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
        .then(product => res.json(product))
        .catch(err => res.json(err, 400));

module.exports.delete = (req, res) =>
    Product.findOneAndDelete({ _id: req.params.id })
        .then(product => res.json(product, product ? 200 : 404))
        .catch(err => res.json(err, 404));

module.exports.getRandom = (_, res) =>
    Product.find()
        .then(products => {
            res.json(products[Math.floor(Math.random() * products.length)]);
        })
        .catch(_ => res.json([], 404));
