"""
Author: Emmanuel Olowu
Link: https://github.com/zeddyemy
Copyright: © 2024 Emmanuel Olowu <zeddyemy@gmail.com>
"""
from flask import Blueprint

api_bp: Blueprint = Blueprint('api', __name__, url_prefix='/api')
auth_bp = Blueprint('auth', __name__, url_prefix='/auth')
payment_bp = Blueprint('payment', __name__, url_prefix='/payments')

from .base import index, auth, payment