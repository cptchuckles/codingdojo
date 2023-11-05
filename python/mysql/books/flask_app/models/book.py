from flask_app.models.model_base import ModelBase


class Book(ModelBase):
    schema = "books_schema"
    table = "books"
    fields = [
        "title",
        "pages",
    ]
