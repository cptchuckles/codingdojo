from flask_app.controllers.dojo_controller import DojoController
from flask_app.controllers.ninja_controller import NinjaController

DojoController().register_crud_routes()
NinjaController().register_crud_routes()
