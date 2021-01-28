from flask import Flask, request, jsonify, render_template
import re
import random
import requests

app = Flask(__name__)

regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route("/api/get-lucky-num", methods=["GET", "POST"])
def endpoint():
    """api backend"""
    a_list = {}
    errors_list = {}
    errors_list['errors'] = {}
    colors = ["red", "green", "orange", "blue"]

    name = request.json["name"]
    if len(name) == 0:
        # errors.append("name required")
        errors_list['errors']['name'] = ['Name is required']
    
    year = request.json["year"]
    if not year:
        errors_list['errors']['year'] = ['year must be between 1900-2000']
    elif int(year) in range (1900, 2000):
        a_list.update( {"year": year} )
    else:
        errors_list['errors']['year'] = ['year must be between 1900-2000']
    
    email = request.json["email"]
    if not (re.search(regex,email)):
        errors_list['errors']['email'] = ["not valid email"]

    color = request.json["color"].lower()
    if color not in colors:
        errors_list['errors']['color'] = ["invalid color, must be red, orange, green, blue"]

    if len(errors_list['errors']) > 0:
        return jsonify(errors_list)
    else:
        num = random.randint(1,100)
        a_list.update( {"luckyNumber": num} )

        year = a_list.get('year')
        res = requests.get(
            f"http://numbersapi.com/{year}/year"
        )
        data = res.text
        a_list.update ( {"bdayFact":data} )

        str_num = str(num)
        num_res = requests.get(
            f"http://numbersapi.com/{str_num}/trivia"
        )
        num_data =  num_res.text
        a_list.update ( {"luckyNumberFact":num_data} )
        
        return a_list