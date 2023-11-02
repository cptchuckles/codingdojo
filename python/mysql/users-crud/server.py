from flask import Flask, render_template, request, redirect, abort
from user import User

app = Flask(__name__)


@app.route("/user")
def home():
    return render_template("user/index.html", users=User.get_all())


@app.route("/user/new")
def new_user():
    return render_template("user/new.html")


@app.route("/user/create", methods=["POST"])
def create_user():
    new_user = User.create(request.form)
    if new_user:
        return redirect("/user")
    else:
        return abort(500)


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
