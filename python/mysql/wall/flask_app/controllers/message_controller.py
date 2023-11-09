from flask import redirect, session, flash
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models.message import Message


class MessageController(ControllerBase):
    def __init__(self):
        super().__init__(Message)

    def create(self, data):
        Message.create(data)
        return redirect("/dashboard")

    def delete(self, id: int):
        if "user_id" not in session:
            return redirect("/")

        msg = Message.get_by_id(id)
        if msg is None:
            return redirect("/dashboard")

        user_id = session["user_id"]

        if msg.sender_user_id == user_id or msg.receiver_user_id == user_id:
            flash("You do not have permission to delete this!", "message-error")
            Message.delete(id)

        return redirect("/dashboard")
