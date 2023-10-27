from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "mastication is the key to great health"


@app.route("/")
def index():
    if "count" not in session:
        session["count"] = 0
    return render_template("index.html", count=session["count"])


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
