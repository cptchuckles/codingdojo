from flask_app.models.model_base import ModelBase


class Dojo(ModelBase):
    table = "dojos"

    def __init__(self, data):
        super().__init__(data)
        self.name = data["name"]
