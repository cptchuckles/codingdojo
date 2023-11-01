from flask import Flask, render_template, request, redirect
from friend import Friend

app = Flask(__name__)


@app.route("/")
def index():
    friends = Friend.get_all()
    return render_template("index.html", friends=friends)


@app.route("/new")
def new_fren():
    return render_template("new.html")


@app.route("/create", methods=["POST"])
def create_fren():
    new_friend = Friend.create(**request.form)
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
