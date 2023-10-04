from mysqlconnection import connectToMySQL

class Animal:
    def __init__(self, data):
        self.id = data['id']
        self.breed = data['breed']
        self.age = data['age']
        self.fav_food = data['fav_food']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls) -> list:

        query = "SELECT * FROM animals.animals;"

        results = connectToMySQL('animals').query_db(query)

        instance_list = []

        for dict in results:
            instance_list.append(cls(dict))

        return instance_list


