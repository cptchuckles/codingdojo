from flask_app import app
import flask_app.controllers as controllers

controllers.register_controllers()

if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=3000)
