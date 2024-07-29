from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token
from config import Config
from models import create_user, authenticate_user

app = Flask(__name__)
app.config.from_object(Config)
jwt = JWTManager(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users_db:
        return jsonify({"msg": "User already exists"}), 400

    create_user(username, password)
    return jsonify({"msg": "User registered successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if authenticate_user(username, password):
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"msg": "Invalid username or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)
