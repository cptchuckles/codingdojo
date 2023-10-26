from flask import Flask, render_template
app = Flask(__name__)


@app.route("/", defaults={"rows": 8, "cols": 8, "background": "#eba", "foreground": "#000"})
@app.route("/<int:rows>", defaults={"cols": 8, "background": "#eba", "foreground": "#000"})
@app.route("/<int:rows>/<int:cols>", defaults={"background": "#eba", "foreground": "#000"})
@app.route("/<int:rows>/<int:cols>/<background>", defaults={"foreground": "#000"})
@app.route("/<int:rows>/<int:cols>/<background>/<foreground>")
def index(rows: int, cols: int, background: str, foreground: str):
    return render_template("index.html", rows=rows, cols=cols, background=background, foreground=foreground)


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
