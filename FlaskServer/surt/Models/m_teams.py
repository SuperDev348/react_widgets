from sqlalchemy import create_engine,MetaData,Table,Column,String,INT,DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class mTeams(Base):
    __tablename__ = 'm_teams'
    id=Column(INT, primary_key = True)
    name=Column(String)
    description=Column(String)
    updated_at=Column(DateTime)
    updated_by=Column(String)
    created_at=Column(DateTime)
    created_by=Column(String)

    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}
        
