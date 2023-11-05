from flask_app.models.model_base import ModelBase


class Author(ModelBase):
    table = "authors"
    fields = ["name"]
