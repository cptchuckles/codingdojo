from flask_app.config.mysqlconnection import connectToMySQL


class ModelBase:
    db = "dojos_and_ninjas_schema"
    table = "none"

    def __init__(self, data):
        self.id = data["id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def get_all(cls):
        query = f"SELECT * FROM {cls.table}"
        view = connectToMySQL(cls.db).query_db(query)
        return [cls(row) for row in view]

    @classmethod
    def get_by_id(cls, id: int):
        query = f"SELECT * FROM {cls.table} WHERE id = %(id)s"
        view = connectToMySQL(cls.db).query_db(query, {"id": id})
        return cls(view[0]) if view else None
