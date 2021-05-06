from app.models import db, Product

def seed_products():
    data = [
             Product(name = "Oatmilk & Honey candle", quantity = '8' userId = 1)
           ]
    for product in data:
        db.session.add(product)
    db.session.commit()
def undo_barbers():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()