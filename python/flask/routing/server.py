from flask import Flask
app = Flask(__name__)


@app.errorhandler(404)
def notfound(_):
    return "<h1>YOU ARE NOT SUPPOSED TO BE HERE BEGONE</h1>"


@app.route("/")
def hello_world():
    return "<h1>henlo worl</h1>"


@app.route("/dojo")
def dojo():
    return "<h1>Dojo!</h1>"


@app.route("/say/<what>")
def say(what: str):
    if what in ["flask", "michael", "john"]:
        return f"<h1>hi {what.capitalize()}!</h1>"
    else:
        return "NO"


@app.route("/repeat/<int:n>/<word>")
def repeat(n: int, word: str):
    return "<h1>" + (word + "<br />") * n + "</h1>"


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
