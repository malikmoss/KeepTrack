from app.models import db, Material

def seed_materials():
    data = [
             Material(name = "Soy Wax", quantity = 50, measure_unit = "lbs", user_id = 1),
             Material(name = "Oatmilk & Honey Fragrance Oil", quantity = 16, measure_unit= "oz", user_id=1)
           ]
    for material in data:
        db.session.add(material)
    db.session.commit()

def undo_materials():
    db.session.execute('TRUNCATE materials CASCADE;')
    db.session.commit()