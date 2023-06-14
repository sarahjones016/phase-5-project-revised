#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Local imports
from app import app
from models import db, User, Daily_Consumption, Drink, Drink_Type
from datetime import date

with app.app_context():
    print("Starting seed...")
    # Seed code goes here!

    User.query.delete()
    Daily_Consumption.query.delete()
    Drink.query.delete()
    Drink_Type.query.delete()

    # user_test = User(email='sarah@gmail.com', _password_hash="test", first_name="Sarah", last_name="Jones")
    # daily_consumption_test = Daily_Consumption(date=date(1999, 0o2, 0o5), user_id=1, consumption_goal=12, ounces_consumed=3)
    drink_test = Drink(daily_consumption_id=2, drink_type_id=3, ounces=1)
    drink_type_test = Drink_Type(name="water")

    # db.session.add(user_test)
    # db.session.add(daily_consumption_test)
    db.session.add(drink_test)
    db.session.add(drink_type_test)

    db.session.commit()

