from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return "go to the playground idiot"


@app.route("/play/<int:count>")
def play(count: int):
    return render_template("index.html", count=count)


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
