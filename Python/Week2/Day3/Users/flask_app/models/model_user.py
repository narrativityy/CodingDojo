from flask_app.config.mysqlconnection import connectToMySQL

class User:
    DB = 'users'

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    def info(self):
        returnStr = f"First Name = {self.first_name} || Last Name = {self.last_name} || Email = {self.email}"
        return returnStr
    

    @classmethod
    def create_one(cls, data:dict):
        query = "INSERT INTO users.users (first_name, last_name, email) VALUES(%(first_name)s, %(last_name)s, %(email)s);"
        animal_id = connectToMySQL(User.DB).query_db(query, data)
        return animal_id


    @classmethod
    def get_all(cls) -> list:

        query = "SELECT * FROM users.users;"

        results = connectToMySQL(User.DB).query_db(query)

        instance_list = []

        for dict in results:
            instance_list.append(cls(dict))

        return instance_list
    
    @classmethod
    def get_one(cls, id):

        query = "SELECT * FROM users.users WHERE id = %(id)s;"
        data = {'id':id}
        results = connectToMySQL(User.DB).query_db(query, data)
        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = """UPDATE users SET first_name=%(first_name)s,last_name=%(last_name)s,
        email=%(email)s WHERE id = %(id)s;"""
        return connectToMySQL(User.DB).query_db(query, data)

    @classmethod
    def delete(cls, id):
        query = "DELETE FROM users WHERE id = %(id)s;"
        data = {'id': id}
        return connectToMySQL(User.DB).query_db(query, data)