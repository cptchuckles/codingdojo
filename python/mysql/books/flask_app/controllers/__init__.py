from flask_app.controllers.controller_base import ControllerBase
import flask_app.models as models

ControllerBase(models.Author).register_crud_routes()
ControllerBase(models.Book).register_crud_routes()
