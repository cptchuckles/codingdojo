from flask import Flask, render_template
import flask_app.controllers


app = Flask(__name__)
app.secret_key = "yeetasaurus rex"


@app.route("/")
def home():
    return render_template("layouts/main.html")
