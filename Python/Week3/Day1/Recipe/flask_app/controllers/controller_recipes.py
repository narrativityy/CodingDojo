from flask_app.models.model_users import User
from flask_app.models.model_recipes import Recipe
from flask_app import app
from flask import render_template, request, redirect, session, flash

# CRUD

@app.route('/recipes')
def recipes_dashboard():
    if not (session):
        return redirect('/')
    user = User.get_one(int(session['uuid']))
    recipes = Recipe.get_all_with_users()
    return render_template('recipes.html', user = user, recipes = recipes)


@app.route('/recipes/<int:id>')
def view_recipe(id):
    recipe = Recipe.get_one_with_users(id)
    user = User.get_one(session['uuid'])
    if session:
        return render_template('view_recipe.html', user = user ,recipe = recipe)
    return redirect('/recipes')


@app.route('/recipes/delete/<int:id>')
def delete_recipe(id):
    recipe = Recipe.get_one_with_users(id)
    if recipe.user.id == session['uuid']:
        Recipe.delete(id)
        return redirect('/recipes')
    return redirect('/recipes')


@app.route('/recipes/edit/<int:id>')
def edit_recipe(id):
    recipe = Recipe.get_one_with_users(id)
    if recipe.user.id == session['uuid']:
        return render_template('edit_recipe.html', recipe = recipe)
    return redirect('/recipes')


@app.post('/recipes/edit/process')
def process_edit():
    if not Recipe.validateRecipe(request.form):
        return redirect('/recipes/edit/{}'.format(request.form['id']))
    Recipe.update(request.form)
    return redirect('/recipes')


@app.route('/recipes/new')
def create_recipe():
    if not (session):
        return redirect('/')
    return render_template('create_recipe.html')


@app.post('/recipes/new/process')
def process_recipe():
    if not Recipe.validateRecipe(request.form):
        return redirect('/recipes/new')
    Recipe.create_one(request.form)
    return redirect('/recipes')

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