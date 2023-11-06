from flask_app.controllers.controller_base import ControllerBase
from flask_app.models.survey import Survey


class SurveyController(ControllerBase):
    def __init__(self):
        super().__init__(Survey)
