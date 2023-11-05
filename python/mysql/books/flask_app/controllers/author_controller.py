from flask import render_template, abort, redirect, request
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models import Author, Book
from flask_app import app


class AuthorController(ControllerBase):
    def __init__(self):
        super().__init__(Author)

        @app.route("/author/add_book", methods=["POST"])
        def add_book(): return self.add_book(request.form)

        @app.route("/author/<int:author_id>/remove_book/<int:book_id>")
        def remove_book(author_id: int, book_id: int):
            Author.remove_book(author_id, book_id)
            return redirect(f"/author/{author_id}")

    def view(self, id: int):
        author = Author.get_with_books(id)
        if author is None:
            print(f"No author was found for id: {id}")
            return abort(404)
        return render_template("views/author/view.html", author=author, all_books=Book.get_all())

    def add_book(self, form_data):
        book_id = form_data.get("book_id")
        if book_id is None:
            return abort("404 book_id not specified")

        author_id = form_data.get("author_id")
        if author_id is None:
            return abort("404 author_id not specified")

        new_link = Author.add_book(author_id, book_id)
        if not isinstance(new_link, int):
            return abort(f"500 Could not insert ({author_id}, {book_id}) into authors_have_books")

        return redirect(f"/author/{author_id}")
