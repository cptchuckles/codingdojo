require("dotenv").config();
const db       = process.env.MONGO_DATABASE;
const username = process.env.ATLAS_USERNAME;
const password = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@jcg-cluster0.tl5qsc7.mongodb.net/${db}?retryWrites=true&w=majority`;

require("mongoose")
    .connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Couldn't connect to MongoDB:", err));
