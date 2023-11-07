from flask_app.models.model_base import ModelBase


class Email(ModelBase):
    db = "email_validation_schema"
    table = "emails"
    fields = ["email"]
