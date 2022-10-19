
from flask import Flask, request, send_from_directory
from flask_cors import CORS
import os
from database import saveData


app = Flask(__name__, static_folder='../build')
# CORS(app)
# Serve React App


@app.route("/get_data", methods=["POST"])
def get_data():
    if request.method == 'POST':
        data = (request.get_json())
        name = data["name"]
        number = data["number"]
        email = data["email"]
        place = data["email"]
        comments = data["comments"]
        db = saveData()

        db.InsertRecords(name, number, email, place, comments)

    return "200"


@app.route("/preview_data")
def preview_data():
    db = saveData()

    db.get_data()

    return "<h1> HELLO WORLD </h1>"


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(use_reloader=True, port=5050, threaded=True)
