from flask import render_template, abort
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models import Author


class AuthorController(ControllerBase):
    def __init__(self):
        super().__init__(Author)

    def view(self, id: int):
        author = Author.get_with_books(id)
        if author is None:
            print(f"No author was found for id: {id}")
            return abort(404)
        return render_template("views/author/view.html", author=author)
