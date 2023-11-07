from flask import redirect
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models.survey import Survey


class SurveyController(ControllerBase):
    def __init__(self):
        super().__init__(Survey)

    def create(self, form_data):
        if not Survey.validate(form_data):
            return redirect("/survey/new")
        else:
            return super().create(form_data)
