from flask_app.models.model_ninjas import Ninja
from flask_app.models.model_dojos import Dojo
from flask_app import app
from flask import render_template, request, redirect, session

# CRUD

# CREATE
@app.route('/ninjas/new')
def new_ninja():
    dojos = Dojo.get_all()
    return render_template('create_ninja.html', dojos = dojos)

@app.post('/ninjas/create')
def add_animal():
    Ninja.create_one(request.form)
    return redirect('/dojos')

# @app.route('/get/<int:id>')
# def get(id):
#     ninja = Ninja.get_one(id)
#     return ninja.name

# # UPDATE
# @app.route('/update')
# def update():
#     return render_template('update.html')

# @app.post('/update/submit')
# def submit_update():
#     data = request.form
#     Ninja.update(data)
#     return redirect('/')

# # DELETE
# @app.route('/delete/<int:id>')
# def delete(id):
#     Ninja.delete(id)
#     return redirect('/')