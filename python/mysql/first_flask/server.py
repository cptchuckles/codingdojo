from flask import Flask, render_template, request, redirect, abort
from friend import Friend

app = Flask(__name__)


@app.route("/")
def index():
    friends = Friend.get_all()
    return render_template("index.html", friends=friends)


@app.route("/<int:id>")
def view(id: int):
    friend = Friend.get(id)

    if not friend:
        return abort(404)
    else:
        return render_template("view.html", friend=friend)


@app.route("/new")
def new_fren():
    return render_template("new.html")


@app.route("/edit/<int:id>")
def edit_fren(id: int):
    friend = Friend.get(id)

    if not friend:
        return "nigga that shit ain't even real", 404
    else:
        return render_template("edit.html", friend=friend)


@app.route("/delete/<int:id>")
def delet_fren(id: int):
    Friend.delete(id)
    return redirect("/")


@app.route("/create", methods=["POST"])
def create_fren():
    new_friend = Friend.create(**request.form)
    return redirect(f"/{new_friend.id}")


@app.route("/update", methods=["POST"])
def update_fren():
    Friend.update(int(request.form["id"]), request.form)
    return redirect(f"/{request.form['id']}")


if __name__ == "__main__":
    app.run(debug=True)
