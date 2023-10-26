from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return "go to the playground idiot"


@app.route("/play", defaults={"count": 3, "color": "lightblue"})
@app.route("/play/<int:count>", defaults={"color": "lightblue"})
@app.route("/play/<int:count>/<color>")
def play(count: int, color: str):
    return render_template("index.html", count=count, color=color)


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
