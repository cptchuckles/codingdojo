// config
const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("cors")());

// routes
require("./routes/product.routes")(app);

// connection
require("./config/mongoose.config");

// run
app.listen(port, () => console.log("Listening on port", port));
