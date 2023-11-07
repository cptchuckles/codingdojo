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
