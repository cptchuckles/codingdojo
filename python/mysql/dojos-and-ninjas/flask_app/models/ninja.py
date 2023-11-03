from flask_app.models.model_base import ModelBase


class Ninja(ModelBase):
    table = "ninjas"
    fields = [
        "first_name",
        "last_name",
        "age",
        "dojo_id"
    ]

    def __init__(self, data):
        super().__init__(data)
