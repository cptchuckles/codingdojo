from flask import flash
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

    @staticmethod
    def validate(data):
        valid = True
        if len(data["name"]) < 2:
            flash("Name must be longer than 1 character.", "name")
            valid = False
        if data["location"] == "Chernobyl":
            flash("Please do not submit surveys from Chernobyl.", "location")
            valid = False
        if data["favorite_language"] == "Fish":
            flash("Why do you have to be a bad person?", "language")
            valid = False
        if data["paradigm"] == "Declarative":
            flash("Please choose a real programming paradigm.", "paradigm")
            valid = False
        if "phone" not in data:
            flash("Do you guys not have phones??", "devices")
            valid = False

        return valid
