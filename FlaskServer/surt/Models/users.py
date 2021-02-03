from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime,BIGINT,INT,TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class Users(Base):
    __tablename__ = 'users'
    id=Column(BIGINT, primary_key = True)
    tenant_id=Column(BIGINT)
    created_by=Column(INT)
    user_type=Column(INT)
    name=Column(String)
    email=Column(String)
    created_at=Column(TIMESTAMP)
    updated_at=Column(TIMESTAMP)
    photo=Column(String)
    phone=Column(String)
    sap_username=Column(String)
    bname=Column(String)
    team_lead=Column(String)
    team_id=Column(INT)
    func_area_id=Column(INT)
    account_owner=Column(String)
    alerts=Column(INT)

