from flask import render_template, abort, redirect, request
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models import Book, Author
from flask_app import app


class BookController(ControllerBase):
    def __init__(self):
        super().__init__(Book)

        @app.route("/book/add_author", methods=["POST"], endpoint="book/add_author")
        def add_author(): return self.add_author(request.form)

        @app.route("/book/<int:book_id>/remove_author/<int:author_id>", endpoint="book/remove_author")
        def remove_author(book_id: int, author_id: int):
            Book.remove_author(book_id, author_id)
            return redirect(f"/book/{book_id}")

    def view(self, id: int):
        book = Book.get_with_authors(id)
        if book is None:
            print(f"No book was found for id: {id}")
            return abort(404)
        return render_template("views/book/view.html", book=book, all_authors=Author.get_all())

    def add_author(self, form_data):
        book_id = form_data.get("book_id")
        if book_id is None:
            return abort("404 book_id not specified")

        author_id = form_data.get("author_id")
        if author_id is None:
            return abort("404 author_id not specified")

        new_link = Book.add_author(book_id, author_id)
        if not isinstance(new_link, int):
            return abort(f"500 Could not insert ({author_id}, {book_id}) into authors_have_books")

        return redirect(f"/book/{book_id}")
