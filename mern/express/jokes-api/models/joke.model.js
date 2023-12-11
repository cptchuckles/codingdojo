const mongoose = require("mongoose");

const JokeSchema = mongoose.Schema({
    setup: {
        type: String,
        required: [true, "A joke must have a setup"],
        minLength: [30, "Setup must be at least 30 characters long"],
    },
    punchline: {
        type: String,
        required: [true, "A joke must have a punchline"],
        minlength: [3, "Punchline must be at least 3 characters long"],
    },
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
