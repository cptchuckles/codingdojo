from flask import Flask, render_template, request, redirect
app = Flask(__name__)
app.secret_key = "bingus"


global submission
submission = {}


@app.route("/")
def index():
    global submission
    submission = {}
    return render_template("index.html")


@app.route("/results")
def results():
    return render_template("results.html", formdata=submission)


@app.route("/submit", methods=["POST"])
def post():
    global submission
    submission = request.form
    return redirect("/results")


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
