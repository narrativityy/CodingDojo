from flask import Flask, render_template  # Import Flask to allow us to create our app


app = Flask(__name__)    # Create a new instance of the Flask class called "app"



@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!' # Return the string 'Hello World!' as a response

list = ["jake", "alexis", "hi"]
@app.route('/getuser/<name>')          # The "@" decorator associates this route with the function immediately following
def get_user(name):
    return render_template('index.html', name=name, list=list)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

