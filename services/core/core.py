from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from dataclasses import dataclass
from sqlalchemy import UniqueConstraint

core = Flask(__name__)
CORS(core)

core.config["SQLALCHEMY_DATABASE_URI"] = (
    "mysql://microservice:microservice@core-db/core"
)

db = SQLAlchemy(core)
migrate = Migrate(core, db)


@dataclass
class House(db.Model):
    id: int
    name: str
    image: str
    description: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=False)
    name = db.Column(db.String(150))
    image = db.Column(db.String(150))
    description = db.Column(db.String(150))


@dataclass
class HouseChecker(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    checker_id = db.Column(db.Integer)
    house_id = db.Column(db.Integer)

    UniqueConstraint("checker_id", "house_id", name="checker_house_unique")


@core.route("/")
def index():
    return "<h1>Hello World!</h1>"


if __name__ == "__main__":
    core.run(host="0.0.0.0", port=5000, debug=True)
