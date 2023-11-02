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


@app.route("/user/edit/<int:id>")
def edit_user(id: int):
    user = User.get(id)

    if user is None:
        return abort(404)

    return render_template("/user/edit.html", user=user)


@app.route("/user/update", methods=["POST"])
def update_user():
    User.update(request.form)
    return redirect("/user")


@app.route("/user/delete/<int:id>")
def delete_user(id: int):
    User.delete(id)
    return redirect("/user")


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
