from flask import Flask, jsonify
app = Flask(__name__, static_folder='./ui_2/build', static_url_path='/') # where static files are stored
# static_url_path is seen in front end, static_folder seen in backend 

#comment out for deployment
#from flask_cors import CORS
#CORS(app)

if __name__ == 'main':
    app.run()

# function to take input form frontend and test against "Sofie"
@app.route("/input/<fname>", methods=["GET"])
def input(fname: str):
    if fname == "Sofie":
        lname = "Kardonik"
    else:
        lname = "User Not Found"
    print(lname)
    return jsonify(output=lname)

@app.route('/')
def index():
    return app.send_static_file('index.html')
