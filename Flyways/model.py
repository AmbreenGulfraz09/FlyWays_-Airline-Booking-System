from sqlalchemy.sql.functions import user

from Flyways.extns import db


class User(db.Model):
    __tablename__ = "user"
    ID = db.Column(db.Integer,primary_key = True)
    Name = db.Column(db.String(255),nullable= False)
    email = db.Column(db.String(255), nullable=False)
    Password = db.Column(db.String(255), nullable=False)

    def SaveToDatabase(self):
        db.session.add(self)
        db.session.commit()


    @staticmethod
    def authenticate(email, password):
        user = User.query.filter_by(email=email, Password=password).first()
        return user is not None

class ContactInfo(db.Model):
    __tablename__ = "contactinfo"
    ID = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(255), nullable=False)
    phoneNumber = db.Column(db.String(255), nullable=False)
    message = db.Column(db.String(1000), nullable=False)

    def SaveToDatabase(self):
        print("Saving to database:", self.Name, self.phoneNumber, self.message)
        try:
            db.session.add(self)
            db.session.commit()
            print("Data saved to database successfully.")
        except Exception as e:
            print("Error saving to database:", str(e))



