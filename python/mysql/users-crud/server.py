from flask import Flask, render_template

app = Flask(__name__)


@app.route("/users")
def home():
    return render_template("users/index.html", title="USERS!!!")


@app.route("/users/new")
def new_user():
    return render_template("users/new.html", title="Create!")


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
