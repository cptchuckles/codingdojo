from flask import redirect, request, flash
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models.email import Email


class EmailController(ControllerBase):
    def __init__(self):
        super().__init__(Email)

    def show(self, id):
        return redirect("/email")

    def create(self, form_data):
        data = {**form_data}
        data["email"] = data["email"].lower()

        if not Email.validate(data):
            return redirect("/email/new")

        return super().create(data)

    def update(self, form_data):
        data = {**form_data}
        data["email"] = data["email"].lower()

        if not Email.validate(data):
            return redirect(f"/email/{data['id']}/edit")

        return super().update(data)
