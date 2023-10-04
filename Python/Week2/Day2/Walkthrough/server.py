from flask import Flask, render_template, session, redirect, request
from model_animal import Animal
app = Flask(__name__)


@app.route('/')
def hello_world():
    animals = Animal.get_all()
    return render_template('index.html', animals = animals)


if __name__=="__main__":
    app.run(debug=True, host='localhost')
