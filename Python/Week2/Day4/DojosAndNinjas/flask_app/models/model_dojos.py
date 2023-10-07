from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import model_ninjas

class Dojo:
    DB = 'dojos_and_ninjas'

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []


    def info(self):
        returnStr = f"Name = {self.name}"
        return returnStr
    

    @classmethod
    def create_one(cls, data:dict):
        query = "INSERT INTO dojos (name) VALUES(%(name)s);"
        dojo_id = connectToMySQL(Dojo.DB).query_db(query, data)
        return dojo_id


    @classmethod
    def get_all(cls) -> list:

        query = "SELECT * FROM dojos;"

        results = connectToMySQL(Dojo.DB).query_db(query)

        if results == False:
            return []

        instance_list = []

        for dict in results:
            instance_list.append(cls(dict))

        return instance_list
    
    @classmethod
    def get_one(cls, id):

        query = "SELECT * FROM dojos WHERE id = %(id)s;"
        data = {'id':id}
        results = connectToMySQL(Dojo.DB).query_db(query, data)
        return cls(results[0])
    
    @classmethod
    def update(cls, data):
        query = """UPDATE dojos_and_ninjas_schema.dojos SET name=%(name)s WHERE id = %(id)s;"""
        return connectToMySQL(Dojo.DB).query_db(query, data)

    @classmethod
    def delete(cls, id):
        query = "DELETE FROM dojos_and_ninjas_schema.dojos WHERE id = %(id)s;"
        data = {'id': id}
        return connectToMySQL(Dojo.DB).query_db(query, data)