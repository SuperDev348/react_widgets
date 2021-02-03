from flask import request
from surt.Utils.logger import Logger
from surt.Models.m_teams import mTeams
from surt.Utils.response import Response
from datetime import datetime

class Test:    

    def __init__(self):
        # Tenant Database connection instance
        self.connection=request.environ['connection']
        # Tenancy Database connection instance
        self.tenancyConnection=request.environ['tenancyConnection']
        # Post Data
        self.oData=request.get_json().get("data")
        # Logged in User Data 
        # self.user=request.get_json()['user']
        print(request.get_json())
        # Logger Instance
        self.logger=Logger()

    def hello(self):
        try:
            # Sample to access Databse table
            team =self.connection.query(mTeams).filter(mTeams.id==5).first()
            # print(team.as_dict())
            return Response(200,message="success", data= team.as_dict()).send()
        except Exception as error:
            return Response(500,message="Something went wrong",error=str(error)).send()
        