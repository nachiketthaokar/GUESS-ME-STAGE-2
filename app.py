from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

templates = [
  {  "input" : 5,
    "category" :"sports",
    "word" : "Chess",},

     {  "input" : 6,
    "category" :"european country name",
    "word" : "france",},

]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get-story")
def get_template():
    return jsonify({
        "status": "success",
        "word": random.choice(templates)
    })