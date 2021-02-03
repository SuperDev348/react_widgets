from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime,INT
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class Ust04(Base):
    __tablename__ = 'ust04'
    mssysname=Column(String, primary_key = True)
    mandt=Column(String,primary_key = True)
    bname=Column(String,primary_key = True)
    profile=Column(String,primary_key = True)
    is_checked=Column(SMALLINT,default=0)
    updated_at=Column(DateTime)
    updated_by=Column(String)
    created_at=Column(DateTime)
    created_by=Column(String)
    is_missing_entry=Column(SMALLINT,default=0)
