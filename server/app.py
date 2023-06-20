#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, make_response
from flask_restful import Resource
from sqlalchemy import desc

# Local imports
from config import app, db, api
from models import User, Daily_Consumption, Drink_Type, Drink

from sqlalchemy.exc import IntegrityError

from datetime import date

#Global functions
def parse_date(datestring):
    return date(int(datestring[:4]),int(datestring[5:7]),int(datestring[8:]))

class Daily_Consumptions(Resource):

    def get(self):
        day_dict = [days.to_dict(only=("id", "date", "user_id", "consumption_goal", "ounces_consumed")) for days in Daily_Consumption.query.all()]

        response = make_response(
            day_dict,
            200
        )

        return response
    

    def post(self):

        new_day = Daily_Consumption(
            date = parse_date(request.json["date"]),
            user_id = request.json['user_id'],
            consumption_goal = request.json['consumption_goal'],
            ounces_consumed = request.json['ounces_consumed'],
        )

        db.session.add(new_day)
        db.session.commit()

        day_dict = new_day.to_dict()
        
        response = make_response(
            day_dict,
            201
        )

        return response
        
api.add_resource(Daily_Consumptions, '/daily_consumptions')

class Drinks(Resource):

    def get(self):
        drink_dict = [drinks.to_dict(only=("daily_consumption_id", "drink_type_id", "ounces")) for drinks in Drink.query.all()]

        response = make_response(
            drink_dict,
            200
        )

        return response

    def post(self):

        new_drink = Drink(
            daily_consumption_id = request.json["daily_consumption_id"],
            drink_type_id = request.json['drink_type_id'],
            ounces = request.json['ounces'],
        )

        db.session.add(new_drink)
        db.session.commit()

        drink_dict = new_drink.to_dict(only=("daily_consumption_id", "drink_type_id", "ounces"))
        
        response = make_response(
            drink_dict,
            201
        )

        return response
    
api.add_resource(Drinks, '/drinks')

class Daily_ConsumptionsByID(Resource):
    
    def get(self, id):
        day = Daily_Consumption.query.filter_by(id = id).first()

  
        day_dict = day.to_dict(only=("id", "date", "user_id", "consumption_goal", "ounces_consumed"))

        response = make_response(
            day_dict,
            200
        )

        return response
    

    def patch(self, id):

        daily_consumption = Daily_Consumption.query.filter_by(id = id).first()

        for attr in request.json:
            
            setattr(daily_consumption, attr, request.json[attr])

            db.session.add(daily_consumption)
            db.session.commit()

            daily_consumption_dict = daily_consumption.to_dict(only=("id", "date", "user_id", "consumption_goal", "ounces_consumed"))

            response = make_response(
                daily_consumption_dict,
                202
            )

        return response

api.add_resource(Daily_ConsumptionsByID, '/daily_consumptions/<int:id>')

class UserById(Resource):
    def get(self, id):
        user = User.query.filter_by(id=id).first()

        if user:
            return user.to_dict(only=("id", "email", "_password_hash", "first_name", "last_name")), 200
        else:
            return {'error': '404: User not found'}, 404
        
api.add_resource(UserById, '/users/<int:id>')


class Daily_ConsumptionByUserId(Resource):
    def get(self, id):

        return [daily_consumption.to_dict(only=("id", "date", "user_id", "consumption_goal", "ounces_consumed")) for daily_consumption in Daily_Consumption.query.filter(Daily_Consumption.user_id == id).order_by(desc('date')).all()]
    
api.add_resource(Daily_ConsumptionByUserId, '/daily_consumptions/user/<int:id>')


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
