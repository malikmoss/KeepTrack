from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class ProductForm(FlaskForm):
    name = StringField('name', [DataRequired()])
    quantity = IntegerField('quantity', [DataRequired()])
    description = StringField('description')
    submit = SubmitField("Submit")
