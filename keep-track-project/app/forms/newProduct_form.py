from flask_wtf import FlaskForm
from wtfforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ProductForm(FlaskForm):
    name = StringField('name', [DataRequired()])
    quantity = IntegerField('quantity', [DataRequired()])
    description = StringField('description')
