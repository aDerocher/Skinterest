from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class NewInkForm(FlaskForm):
    image = StringField('Image', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    subtitle = StringField('Sub-title')
    destination_link = StringField('Destination link')
