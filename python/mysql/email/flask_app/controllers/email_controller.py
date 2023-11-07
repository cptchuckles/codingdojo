from flask import redirect, request, flash
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models.email import Email


class EmailController(ControllerBase):
    def __init__(self):
        super().__init__(Email)

    def show(self, id):
        return redirect("/email")

    def create(self, data):

        if not Email.validate(data):
            return redirect("/email/new")

        return super().create(data)
