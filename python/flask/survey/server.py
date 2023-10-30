from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "bingus"


@app.route("/")
def index():
    session.clear()
    return render_template("index.html")


@app.route("/results")
def results():
    return render_template("results.html", formdata=session["formdata"])


@app.route("/submit", methods=["POST"])
def post():
    session["formdata"] = request.form
    return redirect("/results")


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
