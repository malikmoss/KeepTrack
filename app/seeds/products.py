from app.models import db, Product, Material

def seed_products():
    data = [
             Product(name = "Oatmilk & Honey 6 oz Candle", quantity = 24, description ="OMH 6oz candle", user_id = 1),
             Product(name = "Sage 6oz Candle", quantity = 16, description ="Sage 6oz Candle", user_id = 1),
             Product(name = "Tomato Basil Art Candle", quantity = 8, description ="Tomato Basil 10oz candle", user_id = 1),
             Product(name = "Black Currant travel tin", quantity = 12, description ="BLACK Currant 3oz candle", user_id = 1),
           ]
    for product in data:
        # refactor this in the future
        product.materials = [Material.query.get(id) for id in range(1,11)]
        db.session.add(product)
    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products CASCADE;')
    db.session.commit()