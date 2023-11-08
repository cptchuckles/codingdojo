from flask_app.models.model_base import ModelBase


class User(ModelBase):
    db = "user_auth_schema"
    table = "users"
    fields = [
        "username",
        "email",
        "password_hash",
    ]
