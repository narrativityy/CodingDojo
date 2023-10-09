from flask_app.models.model_users import User
from flask_app import app
from flask_bcrypt import Bcrypt
from flask import render_template, request, redirect, session, flash

# CRUD

# CREATE
@app.post('/users/create')
def create():
    # TODO do the logic for validating the form
    if not User.validate(request.form):
        return redirect('/')
    
    # TODO hash the incoming password
    hash_password = bcrypt.generate_password_hash(request.form['password'])
    data = {
        **request.form,
        'password': hash_password
    }
    User.create_one(data)

    # session['uuid'] = 
    return redirect('/')

# READ
@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/get/<int:id>')
# def get(id):
#     animal = Animal.get_one(id)
#     return animal.name

# UPDATE
# @app.route('/update')
# def update():
#     return render_template('update.html')

# @app.post('/update/submit')
# def submit_update():
#     data = request.form
#     Animal.update(data)
#     return redirect('/')

# DELETE
# @app.route('/delete/<int:id>')
# def delete(id):
#     Animal.delete(id)
#     return redirect('/')
class User:

    @staticmethod
    def validate(data:dict) -> bool:
        is_valid = True

        if (len(data['first_name']) < 2):
            flash('First Name is required', 'err_users_first_name')
            is_valid = False

        if (len(data['last_name']) < 2):
            flash('Last Name is required', 'err_users_last_name')
            is_valid = False

        if (len(data['email']) < 2):
            flash('Email is required', 'err_users_email')
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