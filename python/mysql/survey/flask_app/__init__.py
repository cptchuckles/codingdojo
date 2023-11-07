from flask import Flask, redirect, session
app = Flask(__name__)
app.secret_key = "bingus"


@app.route("/")
def home():
    session.clear()
    return redirect("/survey/new")
