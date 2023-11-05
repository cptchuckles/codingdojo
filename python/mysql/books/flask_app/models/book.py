from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.model_base import ModelBase
from flask_app.models import author


class Book(ModelBase):
    table = "books"
    fields = [
        "title",
        "pages",
    ]

    @classmethod
    def get_with_authors(cls, id: int):
        author_table = author.Author.table
        link_table = "authors_have_books"
        query = f"""
            SELECT * FROM {cls.table}
            LEFT JOIN {link_table}
            ON {link_table}.book_id = {cls.table}.id
            LEFT JOIN {author_table}
            ON {link_table}.author_id = {author_table}.id
            WHERE {cls.table}.id = %(id)s
        """
        view = connectToMySQL(cls.db).query_db(query, {"id": id})
        if not view:
            return None

        book = cls(view[0])
        setattr(book, "authors", [])

        for row in view:
            if row[f"{author_table}.id"] is None:
                continue
            for key in row:
                author_key = f"{author_table}.{key}"
                if author_key in row:
                    row[key] = row[author_key]
            book.authors.append(author.Author(row))

        return book
