from sqlalchemy import create_engine,MetaData,Table,Column,String,INT,DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class mFunctionalArea(Base):
    __tablename__ = 'm_functional_area'
    id=Column(INT, primary_key = True)
    team_id=Column(INT, primary_key = True)
    name=Column(String)
    description=Column(String)
    color_code=Column(String)
    description=Column(String)
    updated_at=Column(DateTime)
    updated_by=Column(String)
    created_at=Column(DateTime)
    created_by=Column(String)


