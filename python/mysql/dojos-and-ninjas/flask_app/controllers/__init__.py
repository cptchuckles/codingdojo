from flask_app.controllers.register import register_crud_routes_for, register_one_to_many_routes
import flask_app.models as models

register_crud_routes_for(models.Dojo)
register_crud_routes_for(models.Ninja)
register_one_to_many_routes(models.Dojo, models.Ninja)
