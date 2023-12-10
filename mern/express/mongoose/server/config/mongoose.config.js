const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

const uri = `mongodb+srv://${username}:${pw}@jcg-cluster0.tl5qsc7.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri)
        .then(() => console.log("Established a connection to MongoDB"))
        .catch(e => console.log("Could not connect to MongoDB:", e));
