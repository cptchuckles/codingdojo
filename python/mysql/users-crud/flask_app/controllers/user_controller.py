from flask import render_template, request, redirect, abort
from flask_app.models.user import User
from flask_app import app


@app.route("/user")
def home():
    return render_template("user/index.html", users=User.get_all())


@app.route("/user/<int:id>")
def get_user(id: int):
    user = User.get(id)

    if user is None:
        return abort(404)
    else:
        return render_template("user/view.html", user=user)


@app.route("/user/new")
def new_user():
    return render_template("user/new.html")


@app.route("/user/create", methods=["POST"])
def create_user():
    new_user = User.create(request.form)
    if new_user:
        return redirect(f"/user/{new_user.id}")
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
    user = User.update(request.form)
    result = redirect(f"/user/{user.id}")
    return result if result else abort(500)


@app.route("/user/delete/<int:id>")
def delete_user(id: int):
    User.delete(id)
    return redirect("/user")
