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
    outputdict = {'Country_or_area': city_data['Country_or_area'],'City_Area': city_data['City_Area'],'D_1950': city_data['D_1950'],'D_1960': city_data['D_1960'],'D_1970': city_data['D_1970'],'D_1980': city_data['D_1980'],'D_1990': city_data['D_1990'],'D_2000': city_data['D_2000'],'D_2010': city_data['D_2010'],'D_2020': city_data['D_2020'],'D_2030': city_data['D_2030']}
    return outputdict


if __name__ == "__main__":
    app.run(debug=True)