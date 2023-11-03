from flask_app.controllers.controller_base import ControllerBase
from flask_app.models.dojo import Dojo


class DojoController(ControllerBase):
    def __init__(self):
        super().__init__(Dojo)
