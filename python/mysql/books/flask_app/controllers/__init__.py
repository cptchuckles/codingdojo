from flask_app.controllers.author_controller import AuthorController
from flask_app.controllers.book_controller import BookController

AuthorController().register_crud_routes()
BookController().register_crud_routes()
