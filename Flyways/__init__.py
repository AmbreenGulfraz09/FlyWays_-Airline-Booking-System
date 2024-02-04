from flask import Flask

from Flyways.extns import db

app = Flask(__name__)
app.config["SECRET_KEY"] = "1234"
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root@localhost/flyways"

db.init_app(app)

from .routes import *


