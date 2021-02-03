from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime,INT
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class Usr02(Base):
    __tablename__ = 'usr02'
    mssysname=Column(String, primary_key = True)
    mandt=Column(String,primary_key = True)
    bname=Column(String,primary_key = True)
    gltgv=Column(String)
    gltgb=Column(String)
    uflag=Column(INT)
    is_valid_check=Column(SMALLINT,default=0)
    is_locked_checked=Column(SMALLINT,default=0)
    updated_at=Column(DateTime)
    updated_by=Column(String)
    created_at=Column(DateTime)
    created_by=Column(String)

