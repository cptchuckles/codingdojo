from flask import render_template, abort
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models import Book


class BookController(ControllerBase):
    def __init__(self):
        super().__init__(Book)

    def view(self, id: int):
        book = Book.get_with_authors(id)
        if book is None:
            print(f"No book was found for id: {id}")
            return abort(404)
        return render_template("views/book/view.html", book=book)
