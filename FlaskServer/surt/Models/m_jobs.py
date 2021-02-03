from sqlalchemy import create_engine,MetaData,Table,Column,String,SMALLINT,DateTime,BLOB
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

class mJobs(Base):
    __tablename__ = 'm_jobs'
    job_id=Column(String, primary_key = True)
    displayname=Column(String)
    mssysname=Column(String)
    job_type=Column(String)
    r_msg=Column(BLOB)
    created_at=Column(DateTime)
    created_by=Column(String)
    updated_at=Column(DateTime)
    updated_by=Column(String)
    schedule=Column(String)
    last_start=Column(DateTime)
    last_finish=Column(DateTime)
    success=Column(SMALLINT,default=1)
    mssrvname=Column(String)
    disabled=Column(SMALLINT)

    def as_dict(self):
       return {c.name: dataFrombyte(getattr(self, c.name)) for c in self.__table__.columns}