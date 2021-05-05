from .db import db

class ProductMaterial(db.Models):
   __tablename__ = 'productmaterials' 

   id = db.Column(db.Integer, primary_key=True, nullable=False)
   prod_id = db.Column(db.Integer, db.foreignKey=True)
   material_id = db.Column(db.Integer, db.foreignKey=True)
   created_at = db.Column(db.DateTime, default=datetime.utcnow,
                           nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow,
                           onupdate=datetime.utcnow, nullable=False)

    def to_dict(self):
        return {
            'id': self.id;
            'prod_id': self.prod_id;
            'material_id': self.material_id
        }