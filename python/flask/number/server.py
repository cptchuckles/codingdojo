from flask import Flask, render_template, session, redirect, request
import random


app = Flask(__name__)
app.secret_key = "no peeking"


class Score:
    def __init__(self, name: str, tries: int):
        self.name = name
        self.tries = tries

    def __repr__(self):
        return "{%s: %d}" % (self.name, self.tries)


hiscores = [
    Score("joe", 4),
    Score("yingus", 27),
    Score("binky", 3),
]


@app.route("/")
def index():
    if "number" not in session:
        session["number"] = random.randrange(1, 100)
    if "guess" not in session:
        session["guess"] = -1
    if "tries" not in session:
        session["tries"] = 0
    if session["guess"] == session["number"]:
        return render_template("win.html", tries=session["tries"])
    elif session["tries"] >= 5:
        return render_template("game_over.html", number=session["number"])
    else:
        session["tries"] += 1
        return render_template("index.html", tries=session["tries"], guess=session["guess"], number=session["number"])


@app.route("/reset")
def reset():
    session.clear()
    return redirect("/")


@app.route("/guess", methods=["POST"])
def guess():
    session["guess"] = int(request.form["guess"])
    return redirect("/")


@app.route("/highscore", methods=["POST"])
def highscore():
    hiscores.append(Score(request.form["name"], session["tries"]))
    return redirect("/leaderboard")


@app.route("/leaderboard")
def leaderboard():
    hiscores.sort(key=lambda score: score.tries)
    return render_template("leaderboard.html", scores=hiscores)


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
