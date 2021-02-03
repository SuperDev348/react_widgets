from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class mSapConnectorConfig(Base):
    __tablename__ = 'm_sap_connector_config'
    mssysname=Column(String, primary_key = True)
    mandt=Column(String,nullable=False)
    bname=Column(String,nullable=False)
    password=Column(String,nullable=False )
    updated_at=Column(DateTime)
    updated_by=Column(String)
    created_at=Column(DateTime)
    created_by=Column(String)


