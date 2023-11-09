from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.model_base import ModelBase
from flask_app.models import user


class Message(ModelBase):
    table = "messages"
    fields = [
        "sender_user_id",
        "receiver_user_id",
        "message",
    ]

    @classmethod
    def instantiate_from_view(cls, view):
        messages = []

        for row in view:
            msg = cls(row)

            if row["senders.id"] is not None:
                for key in row:
                    sender_key = f"senders.{key}"
                    if sender_key in row:
                        row[key] = row[sender_key]
                setattr(msg, "sender", user.User(row))
            else:
                setattr(msg, "sender", None)

            if row["receivers.id"] is not None:
                for key in row:
                    receiver_key = f"receivers.{key}"
                    if receiver_key in row:
                        row[key] = row[receiver_key]
                setattr(msg, "receiver", user.User(row))
            else:
                setattr(msg, "receiver", None)

            messages.append(msg)

        return messages

    @classmethod
    def get_all_for_user(cls, receiver_user_id: int):
        query = f"""
            SELECT * FROM {cls.table}
            JOIN {user.User.table} AS senders ON sender_user_id = senders.id
            JOIN {user.User.table} AS receivers ON receiver_user_id = receivers.id
            WHERE receiver_user_id = %(id)s;
        """
        view = connectToMySQL(cls.db).query_db(query, {"id": receiver_user_id})
        return cls.instantiate_from_view(view)

    @classmethod
    def get_all_from_user(cls, sender_user_id: int):
        query = f"""
            SELECT * FROM {cls.table}
            JOIN {user.User.table} AS senders ON sender_user_id = senders.id
            JOIN {user.User.table} AS receivers ON receiver_user_id = receivers.id
            WHERE sender_user_id = %(id)s;
        """
        view = connectToMySQL(cls.db).query_db(query, {"id": sender_user_id})
        return cls.instantiate_from_view(view)

    @classmethod
    def count_all_from_user(cls, sender_user_id: int) -> int:
        query = f"""
            SELECT COUNT(*) AS count FROM {cls.table}
            WHERE sender_user_id = %(id)s;
        """
        view = connectToMySQL(cls.db).query_db(query, {"id": sender_user_id})
        return view[0].get("count")

    @classmethod
    def get_all_between_users(cls, user_a_id: int, user_b_id: int):
        query = f"""
            SELECT * FROM {cls.table}
            JOIN {user.User.table} AS senders ON sender_user_id = senders.id
            JOIN {user.User.table} AS receivers ON receiver_user_id = receivers.id
            WHERE (sender_user_id = %(a_id)s AND receiver_user_id = %(b_id)s)
               OR (sender_user_id = %(b_id)s AND receiver_user_id = %(a_id)s);
        """
        data = {"a_id": user_a_id, "b_id": user_b_id}
        view = connectToMySQL(cls.db).query_db(query, data)
        return cls.instantiate_from_view(view)
