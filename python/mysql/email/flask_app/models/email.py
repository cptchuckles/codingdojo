from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.model_base import ModelBase
import re


class Email(ModelBase):
    db = "email_validation_schema"
    table = "emails"
    fields = ["email"]

    valid_pattern = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

    @classmethod
    def validate(cls, data) -> bool:
        valid = True

        if not cls.valid_pattern.match(data["email"]):
            valid = False
            flash("Your email is not a valid form!", "email")

        if data["email"].endswith("@email.com"):
            valid = False
            flash("DO YOU MOCK ME???", "email")

        if valid:
            flash(f"The email address {data['email']} is valid! Thank you for your data!", "success")

        return valid

    @classmethod
    def address_exists(cls, email: str) -> bool:
        query = f"SELECT COUNT(*) AS count FROM {cls.table} WHERE email = %(email)s;"
        view = connectToMySQL(cls.db).query_db(query, {"email": email})
        return view[0].get("count") > 0
