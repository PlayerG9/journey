# How to create a simple Webhook with Python

to setup the environment you have to install the [`flask`-library](https://palletsprojects.com/p/flask/) which is a lightweight WSGI web application framework
`pip install flask`
```py
#!/usr/bin/python3
# -*- coding: utf-8 -*-
import flask  # to instantiate the server
from flask import requests  # to access the request
from pprint import pprint  # for a more readable output (pretty-print)


app = flask.Flask(__name__)  # create app


# add the endpoint (http://1.2.3.4/webhook-endpoint) and only allow POST-requests
# (change POST to whatever the service that sends the requests provides. eg. POST, PUT)
@app.route('/webhook-endpoint', methods=['POST'])
def webhook():
    data = requests.json  # access the sended json-body (already converted to pythons builtin objects)
    pprint(data)  # print the recieved data to the terminal (in a very readable format)
    return data  # this is mainly for debug purposes and is not required


if __name__ == '__main__':  # only if this script is directly executed
    app.run(host="127.0.0.1", debug=False)  # start the server
```

the `host` option in `app.run()` is optional and is per default `localhost`/`127.0.0.1`.
If you want your webhook to be available on your local network you need to pass `0.0.0.0`.
This (like `127.0.0.1`) is a special case.
