from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.model_base import ModelBase
from flask_app.models import book


class Author(ModelBase):
    table = "authors"
    fields = ["name"]
    book_link_table = "authors_have_books"


    @classmethod
    def add_book(cls, author_id: int, book_id: int):
        query = f"""
            INSERT INTO {cls.book_link_table}
            (author_id, book_id)
            VALUES
            (%(author_id)s, %(book_id)s)
        """
        return connectToMySQL(cls.db).query_db(query, {"author_id": author_id, "book_id": book_id})

    @classmethod
    def get_with_books(cls, id: int):
        right_table = book.Book.table
        query = f"""
            SELECT * FROM {cls.table}
            LEFT JOIN {cls.book_link_table}
            ON {cls.book_link_table}.author_id = {cls.table}.id
            LEFT JOIN {right_table}
            ON {cls.book_link_table}.book_id = {right_table}.id
            WHERE {cls.table}.id = %(id)s
        """
        view = connectToMySQL(cls.db).query_db(query, {"id": id})
        if not view:
            return None

        author = cls(view[0])
        setattr(author, "books", [])

        for row in view:
            if row[f"{right_table}.id"] is None:
                continue
            for key in row:
                author_key = f"{right_table}.{key}"
                if author_key in row:
                    row[key] = row[author_key]
            author.books.append(book.Book(row))

        return author
