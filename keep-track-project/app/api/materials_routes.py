from flask import Blueprint, jsonify, request
from app.models import db, Material, Note, ProductMaterial, Product, User
from flask_login import current_user, login_required

mat_routes = Blueprint('materials', __name__)

#looking to retrieve all materials
@mat_routes.route('/')
@login_required
def get_materials():
    userId = int(current_user.id)
    userMaterials = Material.query.filter(Material.user_id == user_id).all()
    # materials = [material.to_dict() for material in raw_materials]
    return {'materials' : materials}

@mat_routes('/', methods=['POST'])