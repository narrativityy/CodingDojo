from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class User:
    DB = 'recipe_schema'

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    def info(self):
        returnStr = f"Name = {self.name} || Age = {self.age} || Breed = {self.breed} || Favorite Food = {self.fav_food}"
        return returnStr
    

    @classmethod
    def create_one(cls, data:dict):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES(%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        user_id = connectToMySQL(User.DB).query_db(query, data)
        return user_id


    @classmethod
    def get_all(cls) -> list:

        query = "SELECT * users;"

        results = connectToMySQL(User.DB).query_db(query)

        instance_list = []

        for dict in results:
            instance_list.append(cls(dict))

        return instance_list
    
    @classmethod
    def get_one(cls, id):

        query = "SELECT * FROM users WHERE id = %(id)s;"
        data = {'id':id}
        results = connectToMySQL(User.DB).query_db(query, data)
        return cls(results[0])
    
    @classmethod
    def get_by_email(cls, email):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        data = {'email':email}
        results = connectToMySQL(User.DB).query_db(query, data)

        if not results:
            return []

        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = """UPDATE users SET first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s,
        password=%(password)s WHERE id = %(id)s;"""
        return connectToMySQL(User.DB).query_db(query, data)

    @classmethod
    def delete(cls, id):
        query = "DELETE FROM users WHERE id = %(id)s;"
        data = {'id': id}
        return connectToMySQL(User.DB).query_db(query, data)

    @staticmethod
    def validateReg(data:dict) -> bool:
        is_valid = True

        if (len(data['first_name']) < 3 or not data['first_name'].isalpha()):
            flash('First Name is required, must be characters', 'err_users_first_name')
            is_valid = False

        if (len(data['last_name']) < 3 or not data['last_name'].isalpha()):
            flash('Last Name is required, must be characters', 'err_users_last_name')
            is_valid = False

        if (len(data['email']) < 2):
            flash('Email is required', 'err_users_email')
            is_valid = False

        elif not EMAIL_REGEX.match(data['email']):
            flash('Email is invalid', 'err_users_email')
            is_valid = False

        elif User.get_by_email(data['email']) != []:
            flash('Email is already taken', 'err_users_email')
            is_valid = False

        if (len(data['password']) < 8):
            flash('Password is required, must be 8 characters or more', 'err_users_password')
            is_valid = False

        if (len(data['confirm_password']) < 8 ):
            flash('Confirm Password is required, must be 8 characters or more', 'err_users_confirm_password')
            is_valid = False

        elif (data['password'] != data['confirm_password']):
            flash('Password fields must match!', 'err_users_confirm_password')
            is_valid = False

        return is_valid