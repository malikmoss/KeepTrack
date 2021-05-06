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
@login_required
def add_material():
    item_name = request.json['name']
    quantity = request.json['quantity']
    measure_unit = request.json['measure_unit']
    item = Material(
        name=item_name,
        quantity=quantity,
        measure_unit=measure_unit
    )
    db.session.add(item)
    db.session.commit(item)

    return item.to_dict()


@mat_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def edit_item(id):
    item = Material.query.get(id)
    edited_item = Material()
    #create an Edit Item Form
    #form.validate_on_submit...

@mat_routes.route('/<int:id>', methods=['DELETE'])
def delete_item(id):
    del_item = Material.query.filter(Material.id == id).delete()
    db.session.commit()
    return jsonify('Item deleted.' if del_item else 'Could not delete')
