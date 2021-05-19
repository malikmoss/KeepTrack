from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class MaterialForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    quantity = IntegerField('quantity', validators=[DataRequired()])
    description = StringField('description')
    measure_unit = StringField('measure unit', validators=[DataRequired()])
    submit = SubmitField("Submit")
