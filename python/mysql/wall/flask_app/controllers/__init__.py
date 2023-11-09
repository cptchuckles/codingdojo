from flask_app.controllers.user_controller import UserController
from flask_app.controllers.message_controller import MessageController

UserController().register_crud_routes().register_user_auth_routes()
MessageController().register_crud_routes()
