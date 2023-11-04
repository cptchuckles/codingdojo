from flask_app.models.model_base import ModelBase


class Ninja(ModelBase):
    table = "ninjas"
    fields = [
        "first_name",
        "last_name",
        "age",
        "dojo_id"
    ]
