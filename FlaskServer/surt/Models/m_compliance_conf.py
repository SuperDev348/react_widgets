from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime,INT
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class MComplianceConf(Base):
    __tablename__ = 'm_compliance_conf'
    team_id=Column(INT, primary_key = True)
    functional_id=Column(INT,primary_key = True)
    mssysname=Column(String,primary_key = True)
    mandt=Column(String,primary_key = True)
    bname=Column(String,primary_key = True)
    created_at=Column(DateTime)
    created_by=Column(String)
    updated_at=Column(DateTime)
    updated_by=Column(String)
