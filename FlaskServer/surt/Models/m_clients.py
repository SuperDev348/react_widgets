from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class mClients(Base):
    __tablename__ = 'm_clients'
    mssysname=Column(String, primary_key = True)
    mandt=Column(String,primary_key = True)
    updated_at=Column(DateTime)
    updated_by=Column(String)
    created_at=Column(DateTime)
    created_by=Column(String)


