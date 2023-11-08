from flask_app.controllers.controller_base import ControllerBase
from flask_app.models.user import User


class UserController(ControllerBase):
    def __init__(self):
        super().__init__(User)