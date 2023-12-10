const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters"]
    },
    last_name: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [0, "Age must be non-negative"],
        max: [150, "No old people"],
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;
