from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)

    daily_consumptions = db.relationship("Daily_Consumption", backref="user")

    serialize_rules = ('-daily_consumptions.user',)

    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    @validates("email")
    def validate_email(self, key, email):
        if '@' not in email:
            raise ValueError("Failed email validation: Email must include a @")
        return email

class Daily_Consumption(db.Model, SerializerMixin):
    __tablename__ = 'daily_consumptions'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date)
    consumption_goal = db.Column(db.Integer)
    ounces_consumed = db.Column(db.Integer, default=0)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    drinks = db.relationship("Drink", backref="daily_consumption")

    serialize_rules = ('-user.daily_consumptions', '-drinks.daily_consumption',)


class Drink(db.Model, SerializerMixin):
    __tablename__ = 'drinks'
    id = db.Column(db.Integer, primary_key=True)
    ounces = db.Column(db.Integer)

    daily_consumption_id = db.Column(db.Integer, db.ForeignKey('daily_consumptions.id'))
    drink_type_id = db.Column(db.Integer, db.ForeignKey('drink_types.id'))

    serialize_rules = ('-daily_consumption.drinks', '-drink_type.drinks')

class Drink_Type(db.Model, SerializerMixin):
    __tablename__ = 'drink_types'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    drinks = db.relationship("Drink", backref="drink_type")

    serialize_rules = ('-drinks.drink_type',)

# Models go here!
