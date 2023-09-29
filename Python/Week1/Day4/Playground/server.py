from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"


@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response


@app.route('/play')
def play():
    return render_template('index.html', condition = 'none')


@app.route('/play/<number>')
def play_number(number):
    return render_template('index.html', condition = 'number', number = int(number))


@app.route('/play/<number>/<bg_color>')
def play_number_and_color(number, bg_color):
    return render_template('play_with_colors.html', condition = 'bg_color', number = int(number), bg_color = str(bg_color))


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, host='localhost', port=5001)    # Run the app in debug mode.
