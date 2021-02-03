from flask import request
from surt.Utils.logger import Logger
from surt.Models.m_jobs import mJobs
from surt.Utils.response import Response
from datetime import datetime
import json

class Job:

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

    def getAll(self):
        try:
            # Sample to access Databse table
            jobs =self.connection.query(mJobs).all()
            # print(jobs)
            res = []
            for job in jobs:
                job = job.as_dict()
                res.append(job)
            # print(res)
            return Response(200, message="success", data = res).send()
        except Exception as error:
            return Response(500,message="Something went wrong",error=str(error)).send()
        