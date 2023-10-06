from flask_app.models.model_ninjas import Ninja
from flask_app import app
from flask import render_template, request, redirect, session

# CRUD

# CREATE
# @app.post('/add_animal')
# def add_animal():
#     print (request.form)
#     Ninja.create_one(request.form)
#     return redirect('/')

# READ
@app.route('/')
def index():
    ninja = Ninja.get_one(1)
    return render_template('index.html', ninja = ninja)

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