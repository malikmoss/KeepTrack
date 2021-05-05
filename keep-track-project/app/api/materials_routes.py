from flask import Blueprint, jsonify, request
from app.models import db, Material, Note, ProductMaterial, Product, User
from flask_login import current_user, login_required

mat_routes = Blueprint('materials', __name__)

@mat_routes.route('/')
@login_required
def get_materials():
    