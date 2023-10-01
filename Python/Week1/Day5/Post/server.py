from flask import Flask, render_template, redirect, request, session  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
app.secret_key = 'keep it secret, keep it safe'


@app.route('/')          # The "@" decorator associates this route with the function immediately following
def index():
    return render_template('index.html')  # Return the string 'Hello World!' as a response

@app.route('/users', methods=['POST'])
def redirect_user():
    print('Got post info')
    
    session['username'] = request.form['name']
    session['useremail'] = request.form['email']
    return render_template('display_info.html')


@app.route('/<name>/<email>')
def display_info(name, email):
    return render_template('index.html', name = name, email = email)


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, host='localhost', port = 5001)    # Run the app in debug mode.
