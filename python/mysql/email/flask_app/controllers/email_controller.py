from flask import redirect
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models.email import Email


class EmailController(ControllerBase):
    def __init__(self):
        super().__init__(Email)

    def show(self, id):
        return redirect("/email")
