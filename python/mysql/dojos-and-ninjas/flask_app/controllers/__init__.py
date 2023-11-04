from flask_app.controllers.register import register_one_to_many_routes
from flask_app.controllers.controller_base import ControllerBase
import flask_app.models as models

ControllerBase(models.Dojo).register_crud_routes()
ControllerBase(models.Ninja).register_crud_routes()

register_one_to_many_routes(models.Dojo, models.Ninja)
