from flask_app.models.model_users import User
from flask_app.models.model_recipes import Recipe
from flask_app import app, bcrypt
from flask import render_template, request, redirect, session, flash


# READ
@app.route('/')
def index():
    if not session:
        return render_template('index.html')
    return redirect('/recipes')