from flask import Blueprint, jsonify, request
from app.models import db, Material, Note, ProductMaterial, Product, User
from flask_login import current_user, login_required

mat_routes = Blueprint('materials', __name__)

@mat_routes.route('/')
@login_required
def get_materials():
    userId = int(current_user.id)
    userMaterials = Material.query.filter(Material.user_id == user_id).all()
    materialIds = [userMaterials.material_id for userMaterials in userMaterials]
    materials = [material.to_dict() for server in raw_materials]