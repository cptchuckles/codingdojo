from flask import Flask, render_template
app = Flask(__name__)
app.secret_key = "nobody can know!"

import flask_app.controllers


@app.route("/")
def home():
    return render_template("index.html")
