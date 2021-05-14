from flask import Blueprint, jsonify, request
from ..models import db
from ..models.material import Material
from ..models.note import Note
# from ..models.product_material import ProductMaterial
from ..models.product import Product
from ..models.user import User
from ..forms.newMaterial_form import MaterialForm
from flask_login import current_user, login_required

note_routes = Blueprint('notes', __name__)

@note_routes.route('/material')
@login_required
def get_mat_notes(material_id):
    raw_query = db.session.query(Note, User).join(User) \
        .filter(Note.material_id == material_id).all()
    notes = []
    for (note, user) in raw_query:
        msg = note.to_dict()
        usr = user.to_dict()
        msg['username'] = usr['username']
        notes.append(msg)
    return {'notes' : notes} 

@note_routes.route('/product')
@login_required
def get_prod_notes(product_id):
    raw_query = db.session.query(Note, User).join(User) \
        .filter(Note.product_id == product_id).all()
    notes = []
    for (note, user) in raw_query:
        msg = note.to_dict()
        usr = user.to_dict()
        msg['username'] = usr['username']
        notes.append(msg)
    return {'notes' : notes} 

