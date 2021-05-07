from flask import Blueprint, jsonify, request
from app.models import db, Material, Note, ProductMaterial, Product, User
from app.forms import MaterialForm
from flask_login import current_user, login_required

mat_routes = Blueprint('materials', __name__)

#looking to retrieve all materials
@mat_routes.route('/')
@login_required
def get_materials():
    userId = int(current_user.id)
    materials = Material.query.filter(Material.user_id == user_id).all()
    # materials = [material.to_dict() for material in raw_materials]
    return {'materials' : materials}

@mat_routes('/', methods=['POST'])
@login_required
def add_material():
    item_name = request.json['name']
    quantity = request.json['quantity']
    measure_unit = request.json['measure_unit']
    form = MaterialForm()
    if form.validate_on_submit():
        if form.validate_on_submit():
            item = MaterialForm()
            db.session.add(item)
            db.session.commit()
            return item.to_dict()
    return jsonify('Failed to add new item. Please review input')


@mat_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def edit_item(id):
    item = Material.query.get(id)
    edited_item = Material()
    #create an Edit Item Form
    form = MaterialForm()
    if form.validate_on_submit():
        form.populate_obj(edited_item)
        item = edited_item
        db.session.commit()

@mat_routes.route('/<int:id>', methods=['DELETE'])
def delete_item(id):
    del_item = Material.query.filter(Material.id == id).delete()
    db.session.commit()
    return jsonify('Item deleted.' if del_item else 'Could not delete')
