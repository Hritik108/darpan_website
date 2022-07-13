import re
from flask import Flask, redirect, url_for, request

app = Flask(__name__)


@app.route("/get_data", methods=["POST"])
def home():
    if request.method == 'POST':
        print(request.get_json())

    return {"response": "200"}


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="5050")
