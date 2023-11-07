from flask_app.models.model_base import ModelBase


class Survey(ModelBase):
    table = "surveys"
    fields = [
        "name",
        "location",
        "favorite_language",
        "paradigm",
        "desktop",
        "laptop",
        "tablet",
        "phone",
        "comments",
    ]

    @classmethod
    def create(cls, data):
        new_data = {**data}
        new_data["desktop"] = "desktop" in data
        new_data["laptop"] = "laptop" in data
        new_data["tablet"] = "tablet" in data
        new_data["phone"] = "phone" in data
        return super().create(new_data)
