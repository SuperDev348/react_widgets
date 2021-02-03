from flask import Response as FlaskResponse
from  .logger import Logger
import json
import traceback

class Response:

    def __init__(self,status:int,message:str="",**kwargs):
        self.status=status
        if status == 500:
            Logger().error(traceback.format_exc())
            
        customParameters={}
        for key, value in kwargs.items(): 
            customParameters[key]=value
        defaultResponse={"message":message}
        self.customResponse={**defaultResponse,**customParameters}
        
    def send(self):
        return FlaskResponse(response=json.dumps(self.customResponse),status=self.status, mimetype="application/json")