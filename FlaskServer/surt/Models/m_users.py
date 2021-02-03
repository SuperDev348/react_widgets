from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class mUsers(Base):
    __tablename__ = 'm_users'
    mssysname=Column(String, primary_key = True)
    bname=Column(String,primary_key = True)
    mandt=Column(String,primary_key = True)
    password=Column(String,nullable=False )
    updated_at=Column(DateTime)
    updated_by=Column(String)
    created_at=Column(DateTime)
    created_by=Column(String)


