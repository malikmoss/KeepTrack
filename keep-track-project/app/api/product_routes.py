from flask import Blueprint, jsonify, request
from app.models import db, Material, Note, ProductMaterial, Product, User
from flask_login import current_user, login_required

prod_routes = Blueprint('products', __name__)

@prod_routes.route('/')
@login_required
def all_products():
    products = Product.query.filter(Product.user_id == user.id).all()
    return jsonify(products.to_dict() for product in products)

@prod_routes.route('/', methods=['POST'])
@login_required
def add_product():
    prod_name = request.json['name']
    quantity = request.json['quantity']
    product = Product (
        name=item_name,
        quantity=quantity,
    )
    db.session.add(product)
    db.session.commit(product)

    return product.to_dict()

#route to edit products: edit quantity, name...
@prod_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def edit_products(id):
    product = Product.query.get(id)
    edited_product = Product()
    #create a Product item form
    #form.validate_on_submit...

@prod_routes.route('/<int:id>', methods=['DELETE'])
def delete_product(id):
    del_prod = Product.query.filter(Product.id == id).delete()
    db.session.commit()
    return jsonify('Product Deleted.' if del_prod else 'Could not delete')
