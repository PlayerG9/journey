# How to create a simple Webhook with Python

`pip install flask`
```py
#!/usr/bin/python3
# -*- coding: utf-8 -*-
import flask
from flask import requests
from pprint import pprint


app = flask.Flask(__name__)


@app.route('/webhook-endpoint', methods=['POST'])
def webhook():
    data = requests.json
    pprint(data)
    return data


if __name__ == '__main__':
    app.run(debug=False)
```
