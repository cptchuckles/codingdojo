from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.model_base import ModelBase
from flask_app.models import author


class Book(ModelBase):
    table = "books"
    fields = [
        "title",
        "pages",
    ]

    author_link_table = "authors_have_books"

    @classmethod
    def remove_author(cls, book_id: int, author_id: int):
        query = f"""
            DELETE FROM {cls.author_link_table}
            WHERE author_id = %(author_id)s AND book_id = %(book_id)s
        """
        return connectToMySQL(cls.db).query_db(query, {"author_id": author_id, "book_id": book_id})

    @classmethod
    def add_author(cls, book_id: int, author_id: int):
        query = f"""
            INSERT INTO {cls.author_link_table}
            (author_id, book_id)
            VALUES
            (%(author_id)s, %(book_id)s)
        """
        return connectToMySQL(cls.db).query_db(query, {"author_id": author_id, "book_id": book_id})

    @classmethod
    def get_with_authors(cls, id: int):
        author_table = author.Author.table
        query = f"""
            SELECT * FROM {cls.table}
            LEFT JOIN {cls.author_link_table}
            ON {cls.author_link_table}.book_id = {cls.table}.id
            LEFT JOIN {author_table}
            ON {cls.author_link_table}.author_id = {author_table}.id
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
