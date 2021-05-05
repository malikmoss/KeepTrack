from .db import db
from datetime import datetime

class Note(db.Model):
    __tablename__="notes"

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(2000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    material_id = db.Column(db.Integer, db.ForeignKey('materials.id'),
                            nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'),
                            nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           onupdate=datetime.utcnow, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body,
            'user_id': self.user_id,
            'material_id': self.channel_id,
            'product_id': self.channel_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
    