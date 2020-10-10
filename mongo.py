from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo


# Create an instance of Flask
app = Flask(__name__)


# Use flask_pymongo to set up mongo connection
# app.config["MONGO_URI"] = "mongodb://localhost:27017/global_data"
# mongo = PyMongo(app)
mongo = PyMongo(app, uri = "mongodb://localhost:27017/global_data")
# Route to render index.html template using data from Mongo
@app.route("/")
def data():

    # Find one record of data from the mongo database
    city_data = mongo.db.cities.find_one()
    # Return data
    print(city_data)
    outputdict = {'Country_or_area': city_data['Country_or_area'],'City_Area': city_data['City_Area'],'City_Area': city_data['City_Area']}
    return outputdict


if __name__ == "__main__":
    app.run(debug=True)