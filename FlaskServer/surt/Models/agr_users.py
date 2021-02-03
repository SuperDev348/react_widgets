from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime,INT
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class Agr_Users(Base):
    __tablename__ = 'agr_users'
    mssysname=Column(String, primary_key = True)
    mandt=Column(String,primary_key = True)
    agr_name=Column(String,primary_key = True)
    uname=Column(String,primary_key = True)
    from_dat=Column(String)
    to_dat=Column(String)
    is_checked=Column(SMALLINT,default=0)
    updated_at=Column(DateTime)
    updated_by=Column(String)
    created_at=Column(DateTime)
    created_by=Column(String)
    is_missing_entry=Column(SMALLINT,default=0)

