from app.models import db, Product

def seed_products():
    data = [
             Product(name = "Oatmilk & Honey candle", quantity = 8, user_id = 1)
           ]
    for product in data:
        db.session.add(product)
    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products CASCADE;')
    db.session.commit()