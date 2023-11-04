from flask_app.controllers.register import register_crud_routes_for
import flask_app.models as models

register_crud_routes_for(models.Dojo)
register_crud_routes_for(models.Ninja)
