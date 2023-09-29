from flask import Flask, render_template, session, redirect, request  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
app.secret_key = 'keep it secret, keep it safe'


@app.route('/', methods = ['POST', 'GET'])          # The "@" decorator associates this route with the function immediately following
def index():
    if 'count' in session:
        session['count'] += 1
    else:
        session['count'] = 1

    return render_template('index.html', count = session['count'])  # Return the string 'Hello World!' as a response


@app.route('/add_two', methods = ['POST', 'GET'])
def add_two():
    session['count'] += 1
    return redirect('/')


@app.route('/add_num', methods = ['POST'])
def add_num():
    session['count'] += int(request.form['num']) - 1
    return redirect('/')


@app.route('/destroy_session', methods = ['POST', 'GET'])
def destroy():
    session['count'] = 0
    return redirect('/')

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, host='localhost', port = 5001)    # Run the app in debug mode.
