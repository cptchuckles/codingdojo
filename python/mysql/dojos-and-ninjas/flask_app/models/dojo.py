from flask_app.models.model_base import ModelBase


class Dojo(ModelBase):
    table = "dojos"
    fields = ["name"]
