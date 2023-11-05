from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.model_base import ModelBase
from flask_app.models import book


class Author(ModelBase):
    table = "authors"
    fields = ["name"]

    @classmethod
    def get_with_books(cls, id: int):
        right_table = book.Book.table
        link_table = "authors_have_books"
        query = f"""
            SELECT * FROM {cls.table}
            LEFT JOIN {link_table}
            ON {link_table}.author_id = {cls.table}.id
            LEFT JOIN {right_table}
            ON {link_table}.book_id = {right_table}.id
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
