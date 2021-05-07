from app.models import db, Material

def seed_materials():
    data = [
             Material(name = "Soy Wax", description = "wax for all candles", quantity = 150, measure_unit = "lbs", user_id = 1),
             Material(name = "Oatmilk & Honey Fragrance Oil", description = "for all OMH 6 oz & travel tin candles", quantity = 32, measure_unit= "oz", user_id=1),
             Material(name = "Sage Fragrance Oil", description = "for all Sage 6oz & travel tin candles",  quantity = 32, measure_unit = "oz", user_id = 1),
             Material(name = "6oz Frosted Votive", description = "for all 6oz candles", quantity = 24, measure_unit = 'total', user_id = 1),
             Material(name = "3oz Candle Tin", description = "for all travel tin candles", quantity = 24, measure_unit = 'total', user_id = 1),
             Material(name = "Tomato Basil Fragrance Oil", description = "for TB art candles", quantity = 32, measure_unit = "oz", user_id = 1),
             Material(name = "Black Currant Fragrance Oil", description = "for all BC 6z & travel tin candles", quantity = 16, measure_unit = "oz", user_id = 1),
             Material(name = "10 oz Matte Votive", description = "for all art candles", quantity = 12, measure_unit = 'total', user_id = 1),
             Material(name = 'ECO 4 6" Pre-Tabbed Wicks', description = "Wicks for 6oz candle", quantity = 100, measure_unit = 'total', user_id = 1),
             Material(name = 'ECO 8 6" Pre-Tabbed Wicks', description = "Wicks for 10oz candle", quantity = 100, measure_unit = 'total', user_id = 1)
           ]
    for material in data:
        db.session.add(material)
    db.session.commit()

def undo_materials():
    db.session.execute('TRUNCATE materials CASCADE;')
    db.session.commit()