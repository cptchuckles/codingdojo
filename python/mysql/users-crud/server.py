from flask import Flask, render_template
from user import User

app = Flask(__name__)


@app.route("/users")
def home():
    return render_template("users/index.html", users=User.get_all())


@app.route("/users/new")
def new_user():
    return render_template("users/new.html")


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
