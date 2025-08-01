'''
This module defines the User model for the database.

It includes fields for the user's email, password, and other necessary information,
as well as methods for password hashing and verification.

@author Emmanuel Olowu
@link: https://github.com/zeddyemy
@package: Estate Management
'''

from flask import current_app
from slugify import slugify
from sqlalchemy import inspect, or_
from sqlalchemy.orm import Query, backref
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from ..extensions import db
from ..utils.helpers.basics import generate_random_string
from ..utils.date_time import DateTimeUtils, to_gmt1_or_none
from ..utils.helpers.loggers import console_log
from .media import Media
from config import Config


class TempUser(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    date_joined = db.Column(db.DateTime(timezone=True), default=DateTimeUtils.aware_utcnow)
    
    def __repr__(self):
        return f'<ID: {self.id}, email: {self.email}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'date_joined': self.date_joined,
        }


class AppUser(db.Model, UserMixin):
    
    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(255), nullable=True, unique=True)
    username = db.Column(db.String(50), nullable=True, unique=True)
    unique_code: str = db.Column(db.String(10), unique=True, nullable=False, index=True, default=lambda: generate_random_string(9))
    password_hash = db.Column(db.String(255), nullable=True)
    date_joined = db.Column(db.DateTime(timezone=True), default=DateTimeUtils.aware_utcnow)
    
    
    # Relationships
    profile = db.relationship('Profile', back_populates="app_user", uselist=False, cascade="all, delete-orphan")
    address = db.relationship('Address', back_populates="app_user", uselist=False, cascade="all, delete-orphan")
    wallet = db.relationship('Wallet', back_populates="app_user", uselist=False, cascade="all, delete-orphan")
    payments = db.relationship('Payment', back_populates='app_user', lazy='dynamic')
    subscriptions = db.relationship('Subscription', back_populates='app_user', lazy='dynamic')
    
    roles = db.relationship('UserRole', back_populates='user', foreign_keys='UserRole.app_user_id', cascade="all, delete-orphan") # roles assigned to the user.
    assigned_roles = db.relationship('UserRole', back_populates='assigner', foreign_keys='UserRole.assigner_id', cascade="all, delete-orphan") # roles that the user has assigned to others


    def __str__(self) -> str:
        return self.profile.firstname.capitalize()
    
    @property
    def short_code(self) -> str:
        return self.unique_code
    
    def regenerate_unique_code(self):
        self.unique_code = generate_random_string(9)
    
    @property
    def password(self) -> AttributeError:
        raise AttributeError('password is not a readable attribute')
    
    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        '''
        #This returns True if the password is same as hashed password in the database.
        '''
        return check_password_hash(self.password_hash, password)
    
    @property
    def full_name(self):
        return f"{self.profile.firstname} {self.profile.lastname}"
    
    @property
    def wallet_balance(self):
        return self.wallet.balance
    
    @property
    def role_names(self) -> list[str]:
        """Returns a list of role names for the user."""
        if not db.inspect(self).persistent:
            # Reattach to session if necessary
            self = db.session.merge(self)
        return [str(user_role.role.name.value) for user_role in self.roles]
    
    
    @staticmethod
    def add_search_filters(query: Query, search_term: str) -> Query:
        """
        Adds search filters to a SQLAlchemy query.
        """
        if search_term:
            search_term = f"%{search_term}%"
            
            # Join the Profile table using outerjoin to include users without a profile
            query = query.outerjoin(AppUser.profile)
            
            query = query.filter(
                    or_(
                        AppUser.username.ilike(search_term),
                        AppUser.email.ilike(search_term),
                        Profile.firstname.ilike(search_term),
                        Profile.lastname.ilike(search_term)
                    )
                )
        return query
    
    def __repr__(self) -> str:
        return f"<ID: {self.id}, email: {self.email}>"
    
    def insert(self) -> None:
        db.session.add(self)
        db.session.commit()

    def update(self, commit=True, **kwargs) -> None:
        for key, value in kwargs.items():
            setattr(self, key, value)
        
        if commit:
            db.session.commit()

    def delete(self) -> None:
        db.session.delete(self)
        db.session.commit()
    
    def to_dict(self) -> dict:
        address_info = {}
        if self.address:
            address_info.update({
                'country': self.address.country,
                'state': self.address.state
            })
        
        profile_data = {}
        if self.profile:
            profile_data.update({
                'firstname': self.profile.firstname,
                'lastname': self.profile.lastname,
                'gender': self.profile.gender,
                'phone': self.profile.phone,
                'profile_picture': self.profile.profile_pic,
                'referral_link': self.profile.referral_link,
            })
        
        user_wallet = self.wallet
        wallet_info = {
            'balance': user_wallet.balance if user_wallet else None,
            'currency_name': user_wallet.currency_name if user_wallet else None,
            'currency_code': user_wallet.currency_code if user_wallet else None,
            'currency_symbol': user_wallet.currency_symbol if user_wallet else None,
        }
        
        return {
            "id": self.id,
            'username': self.username,
            "email": self.email,
            "date_joined": to_gmt1_or_none(self.date_joined),
            'wallet': wallet_info,
            "roles": self.role_names,
            **address_info,  # Merge address information
            **profile_data # Merge profile information
        }
    

class Profile(db.Model):
    __tablename__ = "profile"
    
    id = db.Column(db.Integer(), primary_key=True)
    firstname = db.Column(db.String(200), nullable=True)
    lastname = db.Column(db.String(200), nullable=True)
    gender = db.Column(db.String(50), nullable=True)
    phone = db.Column(db.String(120), nullable=True)
    profile_picture_id = db.Column(db.Integer(), db.ForeignKey('media.id'), nullable=True)
    
    user_id = db.Column(db.Integer, db.ForeignKey('app_user.id', ondelete='CASCADE'), nullable=False,)
    app_user = db.relationship('AppUser', back_populates="profile")
    
    def __repr__(self):
        return f'<profile ID: {self.id}, name: {self.firstname}>'
    
    @property
    def referral_link(self):
        return f'{Config.APP_DOMAIN_NAME}/auth/signup/{self.app_user.username}'
    
    def update(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)
        db.session.commit()
    
    @property
    def profile_pic(self):
        if self.profile_picture_id:
            theImage = Media.query.get(self.profile_picture_id)
            if theImage:
                return theImage.get_path()
            else:
                return ''
        else:
            return ''
        
    def to_dict(self):
        return {
            'id': self.id,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'gender': self.gender,
            'phone': self.phone,
            'profile_picture': self.profile_pic,
            'referral_link': f'{self.referral_link}',
        }


class Address(db.Model):
    __tablename__ = "address"
    
    id = db.Column(db.Integer(), primary_key=True)
    country = db.Column(db.String(50), nullable=True)
    state = db.Column(db.String(50), nullable=True)
    
    user_id = db.Column(db.Integer, db.ForeignKey('app_user.id', ondelete='CASCADE'), nullable=False,)
    app_user = db.relationship('AppUser', back_populates="address")
    
    def __repr__(self):
        return f'<address ID: {self.id}, country: {self.country}, user ID: {self.user_id}>'
    
    def update(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)
        db.session.commit()
    
    def to_dict(self):
        return {
            'id': self.id,
            'country': self.country,
            'state': self.state,
            'user_id': self.user_id
        }



