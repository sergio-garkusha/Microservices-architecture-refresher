"""empty message

Revision ID: 92c0006c01b3
Revises: 
Create Date: 2024-12-02 19:50:23.775543

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '92c0006c01b3'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('house',
    sa.Column('id', sa.Integer(), autoincrement=False, nullable=False),
    sa.Column('name', sa.String(length=150), nullable=True),
    sa.Column('image', sa.String(length=150), nullable=True),
    sa.Column('description', sa.String(length=150), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('house_checker',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('checker_id', sa.Integer(), nullable=True),
    sa.Column('house_id', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('house_checker')
    op.drop_table('house')
    # ### end Alembic commands ###