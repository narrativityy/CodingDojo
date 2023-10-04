from flask import Flask, render_template, session, redirect, request
import random
app = Flask(__name__)
app.secret_key = 'this is my key'


@app.route('/')
def index():
    if not session.get('gold'):
        session['gold'] = 0
        # session['activity'] = []
    return render_template('index.html')


@app.route('/process_money', methods=['POST'])
def process_money():
    session['building'] = request.form['type']
    if session['building'] == 'house':
        amount = random.randrange(2, 6)
        session['gold'] += amount

    elif session['building'] == 'cave':
        amount = random.randrange(5, 11)
        session['gold'] += amount

    elif session['building'] == 'farm':
        amount = random.randrange(10, 21)
        session['gold'] += amount

    elif session['building'] == 'casino':
        amount = random.randrange(-50, 51)
        session['gold'] += amount

    return redirect('/')


@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')


if __name__=="__main__":
    app.run(debug=True, host='localhost', port = 5001)
