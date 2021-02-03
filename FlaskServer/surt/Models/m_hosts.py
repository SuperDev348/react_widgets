from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()
import datetime
import json

def dataFrombyte(data):
    if type(data) == type(b''):
        return json.loads(data.decode('utf-8'))
    elif type(data) == type(datetime.datetime(2021, 2, 1, 23, 24, 17)):
        return data.isoformat()
    else:
        return data

class mHosts(Base):
    __tablename__ = 'm_hosts'
    mssysname=Column(String, primary_key = True)
    mssrvname=Column(String,primary_key = True)
    server_ip=Column(String)
    server_description=Column(String)
    active=Column(SMALLINT)
    updated_at=Column(DateTime)
    updated_by=Column(String)
    created_at=Column(DateTime)
    created_by=Column(String)

    def as_dict(self):
       return {c.name: dataFrombyte(getattr(self, c.name)) for c in self.__table__.columns}
