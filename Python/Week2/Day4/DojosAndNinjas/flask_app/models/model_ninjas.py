from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import model_dojos

class Ninja:
    DB = 'dojos_and_ninjas'

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.dojo_id = data['dojo_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    def info(self):
        returnStr = f"First Name = {self.first_name} || Last Name = {self.last_name} || Age = {self.age} || Dojo = {self.dojo_id}"
        return returnStr
    

    @classmethod
    def create_one(cls, data:dict):
        query = "INSERT INTO ninjas (first_name, last_name, age, dojo_id) VALUES(%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s);"
        ninja_id = connectToMySQL(Ninja.DB).query_db(query, data)
        return ninja_id


    @classmethod
    def get_all(cls) -> list:

        query = "SELECT * FROM ninjas;"

        results = connectToMySQL(Ninja.DB).query_db(query)

        instance_list = []

        for dict in results:
            instance_list.append(cls(dict))

        return instance_list

    
    @classmethod
    def get_ninjas_from_dojo(cls, id):
        query = "SELECT * FROM ninjas WHERE dojo_id = %(id)s"
        data = {'id':id}
        results = connectToMySQL(Ninja.DB).query_db(query, data)

        if results == False:
            return []

        print ('*' * 20, results)
        instance_list = []

        for dict in results:
            instance_list.append(cls(dict))

        return instance_list

    
    @classmethod
    def get_one(cls, id):
        query = "SELECT * FROM ninjas JOIN dojos ON dojos.id = ninjas.dojo_id WHERE ninjas.id = %(id)s;"
        data = {'id':id}
        results = connectToMySQL(Ninja.DB).query_db(query, data)
        if not results:
            return []
        
        dict = results[0]
        ninja_instance = cls(dict)

        dojo_data = {
            'id': dict['dojos.id'],
            'created_at': dict['dojos.created_at'],
            'updated_at': dict['dojos.updated_at'],
            'name': dict['name']
        }

        dojo_instance = model_dojos.Dojo(dojo_data)

        ninja_instance.dojo = dojo_instance
        
        return ninja_instance

    @classmethod
    def update(cls, data):
        query = """UPDATE ninjas SET first_name=%(first_name)s,last_name=%(last_name)s,age=%(age)s,
        dojo_id=%(dojo_id)s WHERE id = %(id)s;"""
        return connectToMySQL(Ninja.DB).query_db(query, data)

    @classmethod
    def delete(cls, id):
        query = "DELETE FROM ninjas WHERE id = %(id)s;"
        data = {'id': id}
        return connectToMySQL(Ninja.DB).query_db(query, data)