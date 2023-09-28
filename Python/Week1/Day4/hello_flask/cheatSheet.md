1. mkdir hello_flask
2. cd hello_flask
3. pip3 install pipenv
4. pipenv install flask (whats in your env run: pip list)
5. python3 server.py
6. 
from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
7. python3 server.py
