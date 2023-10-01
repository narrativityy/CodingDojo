1. mkdir hello_flask
2. cd hello_flask
3. pip3 install pipenv
4. pipenv install flask (whats in your env run: pip list)
5. python3 server.py
6. 
from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__=="__main__":
    app.run(debug=True, host='localhost', port = 5001)
7. python3 server.py
