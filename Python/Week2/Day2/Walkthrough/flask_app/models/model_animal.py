from flask_app.config.mysqlconnection import connectToMySQL

class Animal:
    def __init__(self, data):
        self.id = data['id']
        self.breed = data['breed']
        self.age = int(data['age'])
        self.fav_food = data['fav_food']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    def info(self):
        returnStr = f"Name = {self.name} || Age = {self.age} || Breed = {self.breed} || Favorite Food = {self.fav_food}"
        return returnStr
    

    @classmethod
    def create_one(cls, data:dict):
        query = "INSERT INTO animals.animals (breed, age, fav_food, name) VALUES(%(breed)s, %(age)s, %(fav_food)s, %(name)s);"
        animal_id = connectToMySQL('animals').query_db(query, data)
        return animal_id


    @classmethod
    def get_all(cls) -> list:

        query = "SELECT * FROM animals.animals;"

        results = connectToMySQL('animals').query_db(query)

        instance_list = []

        for dict in results:
            instance_list.append(cls(dict))

        return instance_list
    
    @classmethod
    def get_one(cls, id):

        query = "SELECT * FROM animals.animals WHERE id = %(id)s;"
        data = {'id':id}
        results = connectToMySQL('animals').query_db(query, data)
        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = """UPDATE animals SET breed=%(breed)s,age=%(age)s,fav_food=%(fav_food)s,
        name=%(name)s WHERE id = %(id)s;"""
        return connectToMySQL('animals').query_db(query, data)

    @classmethod
    def delete(cls, id):
        query = "DELETE FROM animals WHERE id = %(id)s;"
        data = {'id': id}
        return connectToMySQL('animals').query_db(query, data)
