from flask import Flask, render_template, session, redirect, request
import random


app = Flask(__name__)
app.secret_key = "no peeking"


@app.route("/")
def index():
    if "number" not in session:
        session["number"] = random.randrange(1, 100)
    if "guess" not in session:
        session["guess"] = -1
    if "tries" not in session:
        session["tries"] = 1
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


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
