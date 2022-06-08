import hashlib
import email
from xml.dom.minidom import Identified
from flask import Flask, redirect, render_template, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from __initFirebase__ import auth, firebase, db


app=Flask(__name__)
# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)
#initialize firebase

@app.route("/", methods=["GET"])
def welcome():
    return redirect("http://localhost:3000/", code=302)

def create_token(seed):
    try:
        access_token= create_access_token(identity=seed)
        return jsonify({'Access token':access_token}), 200
    except:
        return jsonify({'msg':'Error. Token creation failed'}), 500

# @app.route('/login', methods=['POST'])
# def login():
#     username=request.json.get("username", None)
#     password=request.json.get("password", None)
#     if username !="test" or password !="test":
#         return jsonify({"msg":"Bad username or password"}),401
#     return create_token(username)

@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


#Initialze person as dictionary
person = {"is_logged_in": False, "name": "", "email": "", "uid": ""}
#~ SUGIN UP SECTION
@app.route("/register", methods=['POST', 'GET'])
def signUp():
    if request.method=='POST':
        uname= request.form.get('username')
        email=request.form.get('email')
        password=request.form.get('password')
        passwordConfirmation= request.form.get('passwordConfirmation')
        try:
            auth.create_user_with_email_and_password(email, password)
            user = auth.sign_in_with_email_and_password(email, password)
            global person
            person["is_logged_in"]=True
            person["email"]=user["email"]
            person["uid"]=user["localId"]
            person["name"]=uname
            #uploading user to database
            data={"name":uname, "email": email}
            db.child("user").child(person["uid"]).set(data)
            return redirect("http://localhost:3000/profile", code=302)
        except:
            return redirect("http://localhost:3000/signup", code=302)
    else:
        if person["is_logged_in"] == True:
            return '',200
            # return redirect("http://localhost:3000/profile", code=302)
        else:
            return redirect("http://localhost:3000/signup", code=302)

#~ LOGIN UP SECTION
@app.route("/login", methods=['POST', 'GET'])
def logIn():
    if request.method =='POST':
        email=request.form.get('email')
        password=request.form.get('password')
        try:
            user=auth.sign_in_with_email_and_password(email, password)
            global person
            person["is_logged_in"]=True
            person["email"]=user["email"]
            person["uid"]=user["localId"]

            data=db.child("user").get()
            person["name"]= data.val()[person["uid"]]["name"]
            return redirect("http://localhost:3000/profile", code=302)
        except:
            return redirect("http://localhost:3000/profile", code=302)
    else:
        if person["is_logged_in"] == True:
            return  redirect("http://localhost:3000/profile", code=302)
        else:
            return  redirect("http://localhost:3000/profile", code=302)
#~ SUGIN OUT SECTION
@app.route("/signout", methods=['POST', 'GET'])
def signOut():
    auth.current_user=None
    return redirect("http://localhost:3000/", code=302)