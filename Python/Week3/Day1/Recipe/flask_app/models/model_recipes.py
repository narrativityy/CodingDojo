from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.model_users import User
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class Recipe:
    DB = 'recipe_schema'

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_made = data['date_made']
        self.under_30_mins = data['under_30_mins']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def create_one(cls, data:dict):
        query = "INSERT INTO recipes (name, description, instructions, date_made, under_30_mins, user_id) VALUES(%(name)s, %(description)s, %(instructions)s, %(date_made)s, %(under_30_mins)s, %(user_id)s);"
        recipe_id = connectToMySQL(Recipe.DB).query_db(query, data)
        return recipe_id


    @classmethod
    def get_all(cls) -> list:

        query = "SELECT * recipes;"

        results = connectToMySQL(Recipe.DB).query_db(query)

        instance_list = []

        for dict in results:
            instance_list.append(cls(dict))

        return instance_list
    
    @classmethod
    def get_all_with_users(cls) -> list:
        query = "SELECT * FROM recipes JOIN users ON users.id = recipes.user_id;"
        results = connectToMySQL(Recipe.DB).query_db(query)

        if not results:
            return []
        
        instance_list = []

        for dict in results:
            recipe_instance = cls(dict)
            user_data = {
                'id': dict['users.id'],
                'created_at': dict['users.created_at'],
                'updated_at': dict['users.updated_at'],
                'first_name': dict['first_name'],
                'last_name': dict['last_name'],
                'email': dict['email'],
                'password': dict['password']
            }

            user_instance = User(user_data)

            recipe_instance.user = user_instance


            instance_list.append(recipe_instance)


        
        return instance_list
    
    @classmethod
    def get_one(cls, id):

        query = "SELECT * FROM recipes WHERE id = %(id)s;"
        data = {'id':id}
        results = connectToMySQL(Recipe.DB).query_db(query, data)

        if not results:
            return []

        return cls(results[0])
    
    @classmethod
    def get_one_with_users(cls, id):
        query = "SELECT * FROM recipes JOIN users ON users.id = recipes.user_id WHERE recipes.id = %(id)s;"
        data = {'id':id}
        results = connectToMySQL(Recipe.DB).query_db(query, data)
        if not results:
            return []
        
        dict = results[0]
        recipe_instance = cls(dict)

        user_data = {
            'id': dict['users.id'],
            'created_at': dict['users.created_at'],
            'updated_at': dict['users.updated_at'],
            'first_name': dict['first_name'],
            'last_name': dict['last_name'],
            'email': dict['email'],
            'password': dict['password']
        }

        user_instance = User(user_data)

        recipe_instance.user = user_instance
        
        return recipe_instance

    
    @classmethod
    def get_by_user_id(cls, user_id):
        query = "SELECT * FROM recipes WHERE user_id = %(user_id)s;"
        data = {'user_id':user_id}
        results = connectToMySQL(Recipe.DB).query_db(query, data)

        if not results:
            return []

        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = """UPDATE recipes SET name=%(name)s,description=%(description)s,instructions=%(instructions)s,
        date_made=%(date_made)s,under_30_mins=%(under_30_mins)s,user_id=%(user_id)s WHERE id = %(id)s;"""
        return connectToMySQL(Recipe.DB).query_db(query, data)

    @classmethod
    def delete(cls, id):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        data = {'id': id}
        return connectToMySQL(Recipe.DB).query_db(query, data)


    #TODO update
    @staticmethod
    def validateRecipe(data:dict) -> bool:
        is_valid = True

        if (len(data['name']) < 3):
            flash('Name is required', 'err_recipes_name')
            is_valid = False

        if (len(data['description']) < 3 or len(data['description']) > 1000):
            flash('Description is required, must be less than 1000 characters', 'err_recipes_description')
            is_valid = False

        if (len(data['instructions']) < 2 or len(data['instructions']) > 1000):
            flash('Instruction field is required, must be less than 1000 characters', 'err_recipes_instructions')
            is_valid = False

        if len(data['date_made']) != 10:
            flash('Date is invalid', 'err_recipes_date_made')
            is_valid = False

        if 'under_30_mins' not in data:
            flash('A yes or no answer is required', 'err_recipes_under_30_mins')
            is_valid = False

        elif (data['under_30_mins'] != 'yes' and data['under_30_mins'] != 'no'):
            flash('A yes or no answer is required', 'err_recipes_under_30_mins')
            is_valid = False

        return is_valid