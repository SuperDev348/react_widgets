import os
from contextlib import contextmanager
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from environs import Env     

env= Env()
env.read_env()

enginePool={}
def getDatabaseEngine(database):
    user=env("DB_USER")
    password=env("DB_PASSWORD")
    ip=env("DB_HOST")
    port=env("DB_PORT")
    if database not in enginePool:
        connectionStr="mysql+pymysql://{0}:{1}@{2}:{3}/{4}".format(user,password,ip,port,database)
        engine = create_engine(connectionStr,echo = True)
        enginePool[database]=engine
    return enginePool[database]

@contextmanager
def session_scope(engine):
    if type(engine)==int:
        user=env("DB_USER")
        password=env("DB_PASSWORD")
        ip=env("DB_HOST")
        port=env("DB_PORT")
        database=engine
        connectionStr="mysql+pymysql://{0}:{1}@{2}:{3}/{4}".format(user,password,ip,port,database)
        engine = create_engine(connectionStr,echo = True)
    Session = sessionmaker(bind = engine)
    session = Session()
    try:
        yield session
        session.commit()
    except:
        session.rollback()
        raise
    finally:
        session.close()
