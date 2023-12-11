const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.getAll);
    app.get("/api/jokes/random", JokeController.getRandom);
    app.get("/api/jokes/:id", JokeController.getById);
    app.post("/api/jokes", JokeController.create);
    app.patch("/api/jokes/:id", JokeController.update);
    app.delete("/api/jokes/:id", JokeController.delete);
};
