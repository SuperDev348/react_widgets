from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime,INT
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class mSystemMaster(Base):
    __tablename__ = 'm_system_master'
    mssysname=Column(String, primary_key = True)
    client=Column(String,primary_key = True)
    bname=Column(String,primary_key = True)
    has_user=Column(SMALLINT,default=0)
    is_checked=Column(SMALLINT,default=0)
    updated_at=Column(DateTime)
    updated_by=Column(String)
    created_at=Column(DateTime)
    created_by=Column(String)

