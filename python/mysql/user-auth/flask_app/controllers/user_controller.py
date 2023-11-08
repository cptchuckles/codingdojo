from flask import redirect, session, render_template, flash
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models.user import User
from flask_app import app


class UserController(ControllerBase):
    def __init__(self):
        super().__init__(User)

    def register_crud_routes(self):
        super().register_crud_routes()
        return self

    def register_user_auth_routes(self):
        @app.route("/dashboard")
        def dashboard():
            if "user_id" not in session:
                return redirect("/")
            return render_template("/views/user/dashboard.html", user=User.get_by_id(int(session["user_id"])))

        @app.route("/logout")
        def logout():
            del session["user_id"]
            return redirect("/")

        return self

    def create(self, form_data):
        data = {**form_data}
        data["email"] = data["email"].lower()

        if not User.validate_form_input(data):
            return redirect("/")

        session["user_id"] = self.model.create(data)
        flash("Success! Welcome to your new account", "success")
        return redirect("/dashboard")
