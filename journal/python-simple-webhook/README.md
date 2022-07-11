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
    app.run(host="127.0.0.1", debug=False)
```

the `host` option in `app.run()` is optional and is per default `localhost`/`127.0.0.1`.
If you want your webhook to be available on your local network you need to pass `0.0.0.0`.
This is (like `127.0.0.1`) a special case.
