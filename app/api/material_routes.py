from flask import Blueprint, jsonify, request
from ..models import db
from ..models.material import Material
from ..models.note import Note
# from ..models.product_material import ProductMaterial
from ..models.product import Product
from ..models.user import User
from ..forms.newMaterial_form import MaterialForm
from flask_login import current_user, login_required

mat_routes = Blueprint('materials', __name__)

#looking to retrieve all materials
@mat_routes.route('/')
# @login_required
def get_materials():
    userId = int(current_user.id)
    materials = Material.query.filter(Material.user_id == userId).all()
    # test = Material.query.get(1)
    # materials = Material.query.all()
    print('MATERIALS', materials)
    # materials = [material.to_dict() for material in raw_materials]
    return {'materials': [material.to_dict() for material in materials] }
    # return test.to_dict()

@mat_routes.route('/<int:id>', methods=['GET'])
# @login_required
def get_material(id):
    # userId = int(current_user.id)
    material = Material.query.get(id)
    # print(material.to_dict())
    # materials = [material.to_dict() for material in raw_materials]
    return material.to_dict()

@mat_routes.route('/', methods=['POST'])
# @login_required
def add_material():
    name = request.json['name']
    quantity = request.json['quantity']
    measure_unit = request.json['measure_unit']
    description = request.json['description']
    user_id = request.json['userId']

    material = Material(
         user_id=user_id,
         name=name,
         quantity=quantity,
         description=description,
         measure_unit=measure_unit,
    )
    form = MaterialForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
            db.session.add(material)
            db.session.commit()
            return material.to_dict()
    return jsonify('Failed to add new item. Please review input')


@mat_routes.route('/<int:id>', methods=['PATCH'])
# @login_required
def edit_item(id):
    item = Material.query.get(id)
    edited_item = Material()
    #create an Edit Item Form
    form = MaterialForm()
    if form.validate_on_submit():
        form.populate_obj(edited_item)
        item = edited_item
        db.session.commit()
        return item.to_dict()
    return jsonify ('Failed to edit item. Please review input.')

@mat_routes.route('/<int:id>', methods=['DELETE'])
def delete_item(id):
    del_item = Material.query.filter(Material.id == id).delete()
    db.session.commit()
    return jsonify('Item deleted.' if del_item else 'Could not delete')
