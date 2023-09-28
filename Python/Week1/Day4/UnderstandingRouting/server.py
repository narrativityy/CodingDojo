from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"


@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response


@app.route('/dojo')
def dojo():
    return 'Dojo!'


@app.route('/say/<thing>')
def say(thing):
    return 'Hi ' + thing + '!'


@app.route('/repeat/<iterator>/<string>')
def repeat(iterator, string):
    return render_template('index.html', iterator = int(iterator), string = str(string))


@app.errorhandler(404)
def function_name(error):
    return "Sorry! No response. Try again."


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, host='localhost' ,port=5001)    # Run the app in debug mode.
