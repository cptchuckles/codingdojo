from flask_app.models.model_base import ModelBase


class User(ModelBase):
    db = "user_auth_schema"
    table = "users"
    fields = [
        "first_name",
        "last_name",
        "email",
        "password_hash",
    ]
