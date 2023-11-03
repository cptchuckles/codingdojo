from mysqlconnection import connectToMySQL


class User:
    db = "users_schema"
    table = "users"

    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def create(cls, data):
        query = f"""
            INSERT INTO {cls.table}
            (first_name, last_name, email)
            VALUES
            (%(first_name)s, %(last_name)s, %(email)s)
        """

        connectToMySQL(cls.db).query_db(query, data)

        query = f"SELECT * FROM {cls.table} ORDER BY id DESC LIMIT 1"
        view = connectToMySQL(cls.db).query_db(query)

        return cls(view[0]) if view else None

    @classmethod
    def get(cls, id: int):
        query = f"SELECT * FROM {cls.table} WHERE id = %(id)s"
        view = connectToMySQL(cls.db).query_db(query, {"id": id})
        return cls(view[0]) if view else None

    @classmethod
    def get_all(cls):
        query = f"SELECT * FROM {cls.table}"
        view = connectToMySQL(cls.db).query_db(query)
        return [cls(row) for row in view]

    @classmethod
    def update(cls, data):
        query = f"""
            UPDATE {cls.table} SET
            first_name = %(first_name)s,
            last_name = %(last_name)s,
            email = %(email)s
            WHERE id = %(id)s
        """

        connectToMySQL(cls.db).query_db(query, data)

        query = "SELECT * FROM users WHERE id = %(id)s"
        view = connectToMySQL(cls.db).query_db(query, data)
        return User(view[0]) if view else None

    @classmethod
    def delete(cls, id: int):
        query = f"DELETE FROM {cls.table} WHERE id = %(id)s"
        return connectToMySQL(cls.db).query_db(query, {"id": id})
