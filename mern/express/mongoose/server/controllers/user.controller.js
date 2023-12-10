const User = require('../models/user.model');

module.exports.getAll = (req, res) => {
    User.find()
        .then(allUsers => res.json({ users: allUsers }))
        .catch(err => res.json(err));
};

module.exports.getById = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.json({ user }))
        .catch(err => res.json(err, 404));
};

module.exports.create = (req, res) => {
    User.create(req.body)
        .then(user => res.json({ user }))
        .catch(err => res.json(err, 400));
};

module.exports.update = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(user => res.json({ user }))
        .catch(err => res.json(err, 400));
};

module.exports.delete = (req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.json(err, 400));
};
