from flask import flash
from flask_app.models.model_base import ModelBase
from flask_app.config.mysqlconnection import connectToMySQL
import re


class User(ModelBase):
    db = "user_auth_schema"
    table = "users"
    fields = [
        "first_name",
        "last_name",
        "email",
        "password_hash",
    ]

    valid_email_format = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

    @classmethod
    def user_exists_with(cls, property_name: str, property_value: str) -> bool:
        query = f"SELECT COUNT(*) AS count FROM {cls.table} WHERE {property_name} = %({property_name})s;"
        view = connectToMySQL(cls.db).query_db(query, {property_name: property_value})
        return view[0].get("count") > 0

    @classmethod
    def validate_form_input(cls, data):
        is_valid = True

        # Presence of data

        if "first_name" not in data or "last_name" not in data:
            flash("Please submit a first and last name", "name")
            is_valid = False

        if "email" not in data:
            flash("You must provide an email address", "email")
            is_valid = False

        if "password" not in data:
            flash("You must provide a password.", "password")
            is_valid = False

        if "confirm-password" not in data:
            flash("You must provide a password confirmation.", "password")
            is_valid = False

        # Form of data

        if not data["first_name"].isalpha() or not data["last_name"].isalpha():
            flash("First and last name must not contain non-alphabetic characters", "name")
            is_valid = False

        if len(data["first_name"]) < 2 or len(data["last_name"]) < 2:
            flash("First and last names must be at least two characters each", "name")
            is_valid = False

        if not cls.valid_email_format.match(data["email"]):
            flash("Email provided is not valid.", "email")
            is_valid = False

        if data["password"] != data["confirm-password"]:
            flash("Password confirmation does not match!", "password")
            is_valid = False

        # Duplicates

        if "id" not in data and cls.user_exists_with("email", data["email"]):
            flash(f"Email address {data['email']} is already in use, please login", "email")
            is_valid = False

        return is_valid
