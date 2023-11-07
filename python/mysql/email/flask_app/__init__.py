from flask import Flask, redirect
app = Flask(__name__)
app.secret_key = "super secret key"


@app.route("/")
def home():
    return redirect("/email")
