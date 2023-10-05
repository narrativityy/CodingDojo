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