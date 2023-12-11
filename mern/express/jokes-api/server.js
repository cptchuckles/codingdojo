require("dotenv").config();
const express = require("express");
const app = express();

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/joke.routes")(app);

app.listen(process.env.PORT, () => {
	console.log("Server listening on port", process.env.PORT);
});
