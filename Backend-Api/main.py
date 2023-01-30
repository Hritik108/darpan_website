
from flask import Flask, render_template, send_from_directory
from flask_cors import CORS
import os
from database import saveData


app = Flask(__name__, static_folder='../build')
# CORS(app)
# Serve React App

@app.route("/test")
def test():
    return "I AM WORKING"

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

    results = db.get_data()

    return render_template("showData.html", length=len(results), results=results)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(use_reloader=True, debug=True,host="0.0.0.0", port=5050, threaded=True)
