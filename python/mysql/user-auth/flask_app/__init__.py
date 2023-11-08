from flask import Flask, render_template
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.secret_key = "super secret key"

bcrypt = Bcrypt(app)


@app.route("/")
def home():
    return render_template("home.html")
