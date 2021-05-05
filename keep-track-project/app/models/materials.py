from .db import db
from datetime import datetime

class Material(db.Model):
    __tablename__ = 'materials'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    measure_unit = db.Column(db.String(20), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           onupdate=datetime.utcnow, nullable=False)

def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'quantity': self.mesaure_unit,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
    