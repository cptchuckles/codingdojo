from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<h1>henlo world</h1>"


@app.route("/success")
def success():
    return "<small>succ sess</small>"


@app.route("/henlo/<name>")
def hello(name: str):
    print(name, "has entered the chat")
    return f"<h1>henlo <em>{name}</em>..."


@app.route("/mafs/<op>/<int:x>/<int:y>")
def mafs(op: str, x: int, y: int):
    match op:
        case "add":
            return str(x+y)
        case "sub":
            return str(x-y)
        case "mult":
            return str(x*y)
        case "div":
            return str(x/y)
        case _:
            return "sussy bakka"


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
