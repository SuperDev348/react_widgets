import os
import logging
import traceback
import werkzeug
from flask import Flask,request
from werkzeug import Request,Response
from sqlalchemy import create_engine
from surt.Module.subModuleMapper import Mapper as sapConfigMapper
from sqlalchemy.orm import sessionmaker
from surt.Utils.sessionUtils import session_scope,getDatabaseEngine
from environs import Env
from flask_cors import CORS, cross_origin

env= Env()
env.read_env()

logLocation=env("LOG_LOCATION")

logging.basicConfig(filename=logLocation,level=logging.DEBUG)

user=env("DB_USER")
password=env("DB_PASSWORD")
ip=env("DB_HOST")
port=env("DB_PORT")
connectionPool={}
enginePool={}

app=Flask(__name__)
# CORS(app, supports_credentials=True)
cors = CORS(app, resources={r"*": {"origins": "*"}})

class Middleware:
    def __init__(self,app):
        self.app=app
    
    def __call__(self,environ,response):
        req=Request(environ)
        # if 'tenant' not in req.headers:
        #     res=Response('header tenant missing',status=500)
        #     return res(environ,response)
        
        # tenant=req.headers['tenant']
        tenant = "widgets"
        environ['logger']=app.logger   

        tenantDatabaseEngine=getDatabaseEngine(tenant)
        with session_scope(tenantDatabaseEngine) as tenantConn:
            environ['connection']=tenantConn
        
        tenancyDatabaseEngine=getDatabaseEngine("tenancy")
        with session_scope(tenancyDatabaseEngine) as tenancyConn:
            environ['tenancyConnection']=tenancyConn
        return self.app(environ,response)

#router
@app.route("/api/v1/<module>",methods=["GET"] )
def apiMapper(module):
    return sapConfigMapper().call(module=module)

def internal_error(exception):
    print ("500 error caught")
    print(traceback.format_exc())
    
app.register_error_handler(500,internal_error)
app.wsgi_app=Middleware(app.wsgi_app)

if __name__=="__main__":
    app.run()
   