from flask_app.models.model_user import User
from flask_app import app
from flask import render_template, request, redirect, session

# CRUD

# CREATE
@app.route('/new')
def create_user_form():
    return render_template('new_user.html')

@app.post('/new/submit')
def create_user():
    User.create_one(request.form)
    return redirect('/')

# READ
@app.route('/')
def index():
    users = User.get_all()
    return render_template('index.html', users = users)

@app.route('/show/<int:id>')
def get(id):
    user = User.get_one(id)
    return render_template('show.html', user = user)

# UPDATE
@app.route('/edit/<int:id>')
def edit(id):
    return render_template('edit.html', id = id)

@app.post('/edit/submit')
def submit_update():
    data = request.form
    User.update(data)
    return redirect('/')

# DELETE
@app.route('/delete/<int:id>')
def delete(id):
    User.delete(id)
    return redirect('/')