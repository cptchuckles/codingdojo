const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/user.routes")(app);

app.listen(port, () => console.log("Listening on port", port));
