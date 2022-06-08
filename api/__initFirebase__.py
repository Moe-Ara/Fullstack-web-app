from flask import Flask
import pyrebase

config = {
  'apiKey': "AIzaSyCBM6tZoxaxHUPMIOlpEKkDbb0ZrihNJKU",
  'authDomain': "ractflaskpractice.firebaseapp.com",
  'projectId': "ractflaskpractice",
  'storageBucket': "ractflaskpractice.appspot.com",
  'databaseURL': "https://ractflaskpractice-default-rtdb.europe-west1.firebasedatabase.app",
  'messagingSenderId': "231172090926",
  'appId': "1:231172090926:web:3b33a4178139866c9c03bf",
  'measurementId': "G-QY5ZWEQSFM"
}

firebase=pyrebase.initialize_app(config)
auth = firebase.auth()
db= firebase.database()