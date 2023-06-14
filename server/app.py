#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import User, Daily_Consumption, Drink_Type, Drink

from sqlalchemy.exc import IntegrityError

app.secret_key = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K'

class Signup(Resource):
    
    def post(self):

        request_json = request.get_json()

        email = request_json.get('email')
        password = request_json.get('password')
        first_name = request_json.get('first_name')
        last_name = request_json.get('last_name')

        user = User(
            email=email,
            first_name=first_name,
            last_name=last_name
        )

        # the setter will encrypt this
        user.password_hash = password

        try:
            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id

            print(user.to_dict())

            return user.to_dict(), 201

        except IntegrityError:
            
            return {'error': '422 Unprocessable Entity'}, 422


class CheckSession(Resource):

    def get(self):

        if session.get('user_id'):

            user = User.query.filter(User.id == session['user_id']).first()

            return user.to_dict(), 200

        return {'error': '401 Unauthorized'}, 401


class Login(Resource):
    
    def post(self):

        request_json = request.get_json()

        email = request_json.get('email')
        password = request_json.get('password')

        user = User.query.filter(User.email == email).first()

        if user:
            if user.authenticate(password):

                session['user_id'] = user.id
                return user.to_dict(), 200

        return {'error': '401 Unauthorized'}, 401


class Logout(Resource):
    
    def delete(self):
        
        if session.get('user_id'):
            
            session['user_id'] = None
            
            return {}, 204
        
        return {'error': '401 Unauthorized'}, 401
    

api.add_resource(Signup, "/signup")
api.add_resource(CheckSession, '/check_session')
api.add_resource(Login, "/login")
api.add_resource(Logout, '/logout')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
