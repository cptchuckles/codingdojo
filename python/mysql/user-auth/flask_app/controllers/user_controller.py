from flask import redirect
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models.user import User


class UserController(ControllerBase):
    def __init__(self):
        super().__init__(User)

    def create(self, form_data):
        data = {**form_data}
        data["email"] = data["email"].lower()

        if not User.validate_form_input(data):
            return redirect("/")

        return super().create(data)
