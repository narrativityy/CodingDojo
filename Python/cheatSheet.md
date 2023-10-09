1. mkdir hello_flask
2. cd hello_flask
3. pip3 install pipenv
4. pipenv install flask pymysql flask-bcrypt (whats in your env run: pip list)
5. python3 server.py
6. create my file structure (MVC)
    1. Root folder (name of my project)
        1. Flask_app
            1. config
                1. mysqlconnection.py
            2. controllers
                1. controller_(table name).py
            3. models
                1. model_(table name).py
            4. static
                1. css
                    1. style.css
                2. js
                    1. script.js
            5. templates
                1. index.html
            6. \_\_init__.py
        2. pipfile
        3. pipfile.lock
        4. server.py
7. add boilderplate code


# Boiler Plate
## server.py
```py
from flask_app import app
from flask_app.controllers import controller_animal

if __name__=="__main__":
    app.run(debug=True, host='localhost', port=5001)
```

## mysqlconnection.py
```py
# a cursor is the object we use to interact with the database
import pymysql.cursors
# this class will give us an instance of a connection to our database
class MySQLConnection:
    def __init__(self, db):
        # change the user and password as needed
        connection = pymysql.connect(host = 'localhost',
                                    user = 'root', 
                                    password = 'rootroot', 
                                    db = db,
                                    charset = 'utf8mb4',
                                    cursorclass = pymysql.cursors.DictCursor,
                                    autocommit = False)
        # establish the connection to the database
        self.connection = connection
    # the method to query the database
    def query_db(self, query:str, data:dict=None):
        with self.connection.cursor() as cursor:
            try:
                query = cursor.mogrify(query, data)
                print("Running Query:", query)
     
                cursor.execute(query)
                if query.lower().find("insert") >= 0:
                    # INSERT queries will return the ID NUMBER of the row inserted
                    self.connection.commit()
                    return cursor.lastrowid
                elif query.lower().find("select") >= 0:
                    # SELECT queries will return the data from the database as a LIST OF DICTIONARIES
                    result = cursor.fetchall()
                    return result
                else:
                    # UPDATE and DELETE queries will return nothing
                    self.connection.commit()
            except Exception as e:
                # if the query fails the method will return FALSE
                print("Something went wrong", e)
                return False
            finally:
                # close the connection
                self.connection.close() 
# connectToMySQL receives the database we're using and uses it to create an instance of MySQLConnection
def connectToMySQL(db):
    return MySQLConnection(db)
```

## \_\_init__.py
```py
from flask import Flask

app = Flask(__name__)
app.secret_key = 'keep it safe'
```

## controller.py
```py
from flask_app.models.model_animal import Animal
from flask_app import app
from flask import render_template, request, redirect, session

# CRUD

# CREATE
@app.post('/add_animal')
def add_animal():
    print (request.form)
    Animal.create_one(request.form)
    return redirect('/')

# READ
@app.route('/')
def index():
    animals = Animal.get_one(1)
    return render_template('index.html', animals = animals)

@app.route('/get/<int:id>')
def get(id):
    animal = Animal.get_one(id)
    return animal.name

# UPDATE
@app.route('/update')
def update():
    return render_template('update.html')

@app.post('/update/submit')
def submit_update():
    data = request.form
    Animal.update(data)
    return redirect('/')

# DELETE
@app.route('/delete/<int:id>')
def delete(id):
    Animal.delete(id)
    return redirect('/')
```

## model.py
```py
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
```
8. Test to make sure server is working
9. python3 server.py
10. ```html
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
    ```
