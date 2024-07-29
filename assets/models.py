from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

# Simulating a database with a dictionary
users_db = {}

def create_user(username, password):
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    users_db[username] = hashed_password

def authenticate_user(username, password):
    user = users_db.get(username)
    if user and bcrypt.check_password_hash(user, password):
        return True
    return False
