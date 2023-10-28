from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "mastication is the key to great health"


@app.route("/")
def index():
    if "count" not in session:
        session["count"] = 0
    if "visits" not in session:
        session["visits"] = 0
    session["count"] += 1
    session["visits"] += 1
    return render_template("index.html", count=session["count"], visits=session["visits"])


@app.route("/destroy_session")
def destroy_session():
    session.clear()
    return redirect("/")


@app.route("/add_two")
def add_two():
    if "count" not in session:
        session["count"] = 2
    else:
        session["count"] += 1
    return redirect("/")


@app.route("/increment", methods=["POST"])
def increment():
    if "count" not in session:
        session["count"] = 1
    session["count"] += int(request.form["amount"]) - 1
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
