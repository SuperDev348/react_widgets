from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class mInstance(Base):
    __tablename__ = 'm_instance'
    mssysname=Column(String, primary_key = True)
    mssrvname=Column(String)
    router=Column(String)
    server=Column(String)
    database=Column(String)
    system=Column(String)
    description=Column(String)
    address=Column(String)
    ava_client=Column(String)
    ava_bname=Column(String)
    updated_at=Column(DateTime)
    updated_by=Column(String)
    created_at=Column(DateTime)
    created_by=Column(String)
        
    
    



# ALTER TABLE `22`.m_instance ADD created_at DATETIME NULL;
# ALTER TABLE `22`.m_instance ADD created_by varchar(100) NULL;
# ALTER TABLE `22`.m_instance ADD updated_at DATETIME NULL;
# ALTER TABLE `22`.m_instance ADD updated_by varchar(100) NULL;
