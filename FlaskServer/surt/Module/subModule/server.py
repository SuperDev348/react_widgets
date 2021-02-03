from flask import request
from surt.Utils.logger import Logger
from surt.Models.m_hosts import mHosts
from surt.Models.m_jobs import mJobs
from surt.Utils.response import Response
from datetime import datetime
import json

class Server:

    def __init__(self):
        # Tenant Database connection instance
        self.connection=request.environ['connection']
        # Tenancy Database connection instance
        self.tenancyConnection=request.environ['tenancyConnection']
        # Post Data
        # self.oData=request.get_json().get("data")
        # Logged in User Data 
        # self.user=request.get_json()['user']
        # print(request.get_json())
        # Logger Instance
        self.logger=Logger()

    def getData(self):
        try:
            # Sample to access Databse table
            hosts =self.connection.query(mHosts).all()
            jobs =self.connection.query(mJobs).all()
            nMaintaince = 0
            nNoSchedule = 0
            nOnline = 0
            nDown = 0
            for job in jobs:
                if job.job_type == "MONITORING" and job.disabled == 1:
                    nMaintaince += 1
                elif job.schedule == None or job.schedule == "":
                    nNoSchedule += 1
            
            for host in hosts:
                if host.active == 1:
                    nOnline += 1
                elif host.active == 0:    
                    nDown += 1
            res = {}
            res["nOnline"] = nOnline
            res["nDown"] = nDown
            res["nMaintaince"] = nMaintaince
            res["nNoSchedule"] = nNoSchedule
            return Response(200, message="success", data = res).send()
        except Exception as error:
            return Response(500,message="Something went wrong",error=str(error)).send()
        