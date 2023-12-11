const Joke = require("../models/joke.model");

module.exports.getAll = (_, res) =>
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err, 400));

module.exports.getById = (req, res) =>
    Joke.findOne({ _id: req.params.id })
        .then(joke => res.json(joke))
        .catch(err => res.json(err, 404));

module.exports.create = (req, res) =>
    Joke.create(req.body)
        .then(joke => res.json(joke))
        .catch(err => res.json(err, 400));

module.exports.update = (req, res) =>
    Joke.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
        .then(joke => res.json(joke))
        .catch(err => res.json(err, 400));

module.exports.delete = (req, res) =>
    Joke.findOneAndDelete({ _id: req.params.id })
        .then(joke => res.json(joke, joke ? 200 : 404))
        .catch(err => res.json(err, 404));

module.exports.getRandom = (req, res) =>
    Joke.find()
        .then(jokes => {
            res.json(jokes[Math.floor(Math.random() * jokes.length)]);
        })
        .catch(err => res.json([], 404));
