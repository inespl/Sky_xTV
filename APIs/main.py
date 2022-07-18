from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

from fastapi import Depends, FastAPI
from sqlalchemy import Column, Integer, String

# Mudar Aqui para o link correto
my_database_connection = "postgresql://user:password@server_ip/db_name"

engine = create_engine(my_database_connection)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class testAPIModel(Base):
    __tablename__ = "test_api"
    id = Column(Integer, primary_key=True)
    email = Column(String(256))


Base.metadata.create_all(bind=engine)
app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/testing_api/")
def read_users(db:Session = Depends(get_db)):
    users = db.query(testAPIModel).all()
    return users