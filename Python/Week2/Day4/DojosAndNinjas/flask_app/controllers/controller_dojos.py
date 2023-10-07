from flask_app.models.model_dojos import Dojo
from flask_app.models.model_ninjas import Ninja
from flask_app import app
from flask import render_template, request, redirect, session

# CRUD

# CREATE
@app.post('/dojos/create')
def create_one():
    Dojo.create_one(request.form)
    return redirect('/dojos')

# READ
@app.route('/dojos')
def dojos():
    dojos = Dojo.get_all()
    return render_template('index.html', dojos = dojos)

@app.route('/dojos/<int:id>')
def get(id):
    ninjas = Ninja.get_ninjas_from_dojo(id)
    dojo = Dojo.get_one(id)
    return render_template('dojos_and_ninjas.html', dojo = dojo, ninjas = ninjas)

# # UPDATE
# @app.route('/update')
# def update():
#     return render_template('update.html')

# @app.post('/update/submit')
# def submit_update():
#     data = request.form
#     Dojo.update(data)
#     return redirect('/')

# # DELETE
# @app.route('/delete/<int:id>')
# def delete(id):
#     Dojo.delete(id)
#     return redirect('/')