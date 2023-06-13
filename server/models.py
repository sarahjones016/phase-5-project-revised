from sqlalchemy_serializer import SerializerMixin

from config import db

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)

    daily_consumptions = db.relationship("Daily_Consumption", backref="user")

class Daily_Consumption(db.Model, SerializerMixin):
    __tablename__ = 'daily_consumptions'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date)
    consumption_goal = db.Column(db.Integer)
    ounces_consumed = db.Column(db.Integer, default=0)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    drinks = db.relationship("Drink", backref="daily_consumption")

class Drink(db.Model, SerializerMixin):
    __tablename__ = 'drinks'
    id = db.Column(db.Integer, primary_key=True)
    ounces = db.Column(db.Integer)

    daily_consumption_id = db.Column(db.Integer, db.ForeignKey('daily_consumptions.id'))
    drink_type_id = db.Column(db.Integer, db.ForeignKey('drink_types.id'))

class Drink_Type(db.Model, SerializerMixin):
    __tablename__ = 'drink_types'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    drinks = db.relationship("Drink", backref="drink_type")

# Models go here!
