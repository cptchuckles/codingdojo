const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, "A title is required"],
	},
	price: {
		type: Number,
		required: [true, "A price is required"],
		min: [0, "A price cannot be negative, we'd go out of business!"],
	},
	description: {
		type: String,
		required: [true, "A description is required"],
	},
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
