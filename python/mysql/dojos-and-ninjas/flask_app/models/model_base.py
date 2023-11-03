from flask_app.config.mysqlconnection import connectToMySQL


class ModelBase:
    db = "dojos_and_ninjas_schema"
    table = "none"
    fields = []

    def __init__(self, data):
        self.id = data["id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        for field in self.__class__.fields:
            self.__dict__[field] = data[field]

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

    @classmethod
    def create(cls, data):
        prepared_fields = [f"%({field})s" for field in cls.fields]
        query = f"""
            INSERT INTO {cls.table}
            ({", ".join(cls.fields)})
            VALUES
            ({", ".join(prepared_fields)})
        """
        return connectToMySQL(cls.db).query_db(query, data)

    @classmethod
    def update(cls, data):
        prepared_fields = [f"%({field})s" for field in cls.fields]
        pairs = zip(cls.fields, prepared_fields)
        sets = [f"{pair[0]} = {pair[1]}" for pair in pairs]
        query = f"""
            UPDATE {cls.table}
            SET {", ".join(sets)}
            WHERE id = %(id)s
        """
        connectToMySQL(cls.db).query_db(query, data)

        return cls.get_by_id(int(data["id"]))

    @classmethod
    def delete(cls, id: int):
        query = f"DELETE FROM {cls.table} WHERE id = %(id)s"
        return connectToMySQL(cls.db).query_db(query, {"id": id})
