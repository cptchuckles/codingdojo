# import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL
# model the class after the friend table from our database


class Friend:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get(cls, id: int):
        query = "SELECT * FROM friends WHERE id = %(id)s"

        result = connectToMySQL('first_flask').query_db(query, {"id": id})

        return cls(result[0]) if result else None

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM friends;"

        results = connectToMySQL('first_flask').query_db(query)

        return [cls(result) for result in results]

    @classmethod
    def create(cls, first_name: str, last_name: str, occupation: str):
        query = """
            INSERT INTO friends (first_name, last_name, occupation)
            VALUES (%(first_name)s, %(last_name)s, %(occupation)s)
        """

        data = {
            "first_name": first_name,
            "last_name": last_name,
            "occupation": occupation,
        }

        connectToMySQL('first_flask').query_db(query, data)

        query = """
            SELECT * FROM friends ORDER BY id DESC LIMIT 1
        """
        new_friend_data = connectToMySQL('first_flask').query_db(query)[0]

        return cls(new_friend_data)

    @classmethod
    def delete(cls, id: int):
        query = "DELETE FROM friends WHERE id = %(id)s"

        return connectToMySQL('first_flask').query_db(query, {"id": id})

    @classmethod
    def update(cls, id: int, new_data):
        query = """
            UPDATE friends SET
            first_name = %(first_name)s,
            last_name = %(last_name)s,
            occupation = %(occupation)s
            WHERE id = %(id)s
        """

        new_data.id = id

        return connectToMySQL('first_flask').query_db(query, new_data)
