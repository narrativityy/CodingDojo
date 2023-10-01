from flask import Flask, render_template, session, redirect, request
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def process():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['fav_lang'] = request.form['language']
    session['comment'] = request.form['comment']
    return redirect('/result')


@app.route('/result')
def result():
    return render_template('result.html')



if __name__=="__main__":
    app.run(debug=True, host='localhost', port = 5001)
