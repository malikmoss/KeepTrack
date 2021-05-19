from app.models import db
from flask.cli import AppGroup
from .users import seed_users, undo_users
from .materials import seed_materials, undo_materials
from .products import seed_products, undo_products


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    db.drop_all()
    db.create_all()
    seed_users()
    seed_materials()
    seed_products()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_products()
    undo_materials()
    undo_users()
    # Add other undo functions here
