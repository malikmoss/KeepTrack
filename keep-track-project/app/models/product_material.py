from .db import db
from datetime import datetime

class ProductMaterial(db.Model):
   __tablename__ = 'productmaterials' 

   prod_id = db.Column(db.Integer, db.ForeignKey('products.id'), primary_key=True)
   material_id = db.Column(db.Integer, db.ForeignKey('materials.id'), primary_key=True)
   created_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False)
   updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           onupdate=datetime.utcnow, nullable=False)

def to_dict(self):
        return {
            'prod_id': self.prod_id,
            'material_id': self.material_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }