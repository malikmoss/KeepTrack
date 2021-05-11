from flask import Blueprint, jsonify, request
from ..models import db
from ..models import db
from ..models.material import Material
from ..models.product import Product
from ..models.note import Note
from ..models.product_material import ProductMaterial
from ..models.user import User
from ..forms.newProduct_form import ProductForm
from flask_login import current_user, login_required

prod_routes = Blueprint('products', __name__)

@prod_routes.route('/')
# @login_required
def all_products():
    userId = int(current_user.id)
    products = Product.query.filter(Product.user_id == userId).all()
    return {'products': [product.to_dict() for product in products]}

@prod_routes.route('/<int:id>', methods=['GET'])
# @login_required
def get_product(id):
    # userId = int(current_user.id)
    product = Product.query.get(id)
    return product.to_dict()

@prod_routes.route('/', methods=['POST'])
# @login_required
def add_product():
    product_name = request.json['name']
    quantity = request.json['quantity']
    description = request.json['description']
    form = ProductForm()
    if form.validate_on_submit():
        if form.validate_on_submit():
            product = ProductForm()
            db.session.add(product)
            db.session.commit()
            return product.to_dict()
    return jsonify('Failed to add new product. Please review input')

#route to edit products: edit quantity, name...
@prod_routes.route('/<int:id>', methods=['PATCH'])
# @login_required
def edit_products(id):
    product = Product.query.get(id)
    edited_product = Product()
    form = ProductForm()
    if form.validate_on_submit():
        form.populate_obj(edited_product)
        product = edited_product
        db.session.commit()
        return product.to_dict()
    return jsonify('Failed to edit product. Please review input')

@prod_routes.route('/<int:id>', methods=['DELETE'])
def delete_product(id):
    del_prod = Product.query.filter(Product.id == id).delete()
    db.session.commit()
    return jsonify('Product Deleted.' if del_prod else 'Could not delete')
