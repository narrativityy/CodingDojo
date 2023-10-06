from flask_app.models.model_dojos import Dojo
from flask_app import app
from flask import render_template, request, redirect, session

# CRUD

# CREATE
# @app.post('/add_animal')
# def add_animal():
#     print (request.form)
#     Dojo.create_one(request.form)
#     return redirect('/')

# # READ
# @app.route('/')
# def index():
#     dojos = Dojo.get_dojo_with_ninjas({'id': 1})
#     return render_template('index.html', dojos = dojos)

# @app.route('/get/<int:id>')
# def get(id):
#     dojo = Dojo.get_one(id)
#     return dojo.name

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