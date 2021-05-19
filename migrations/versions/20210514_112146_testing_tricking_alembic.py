"""testing, tricking alembic

Revision ID: 6596cdfd93e2
Revises: 7fa0a6d46dff
Create Date: 2021-05-14 11:21:46.165893

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '6596cdfd93e2'
down_revision = '7fa0a6d46dff'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('productmaterials')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('productmaterials',
    sa.Column('prod_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('material_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('created_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=False),
    sa.Column('updated_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['material_id'], ['materials.id'], name='productmaterials_material_id_fkey'),
    sa.ForeignKeyConstraint(['prod_id'], ['products.id'], name='productmaterials_prod_id_fkey'),
    sa.PrimaryKeyConstraint('prod_id', 'material_id', name='productmaterials_pkey')
    )
    # ### end Alembic commands ###