from flask_app.models.model_users import User
from flask_app import app, bcrypt
from flask import render_template, request, redirect, session, flash

# CRUD

# CREATE
@app.post('/users/create')
def create():
    # TODO do the logic for validating the form
    if not User.validateReg(request.form):
        return redirect('/')
    
    # TODO hash the incoming password
    hash_password = bcrypt.generate_password_hash(request.form['password'])
    data = {
        **request.form,
        'password': hash_password
    }
    session['uuid'] = User.create_one(data)
    print('*' * 20, session['uuid'])
    return redirect('/dashboard')

# READ
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    if not (session):
        return redirect('/')
    user = User.get_one(int(session['uuid']))
    return render_template('dashboard.html', user = user)

@app.route('/users/logout')
def logout():
    session.clear()
    return redirect('/')

@app.post('/users/login/process')
def login():
    data = {
        **request.form
    }
    user = User.get_by_email(data['email'])
    if not user or user == False:
        flash("Invalid Email/Password", "err_users_login")
        return redirect('/')
    if not bcrypt.check_password_hash(user.password, data['password']):
        flash("Invalid Email/Password", "err_users_login")
        return redirect('/')
    
    session['uuid'] = user.id
    return redirect('/dashboard')

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