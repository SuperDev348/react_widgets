import requests
import base64
import json
import sys,os


class EntityProxy:
   
    @classmethod
    def apiProxy(cls, parameters):
        try:
            tenant=str(parameters["tenant"])
            path=parameters["queryParameters"]["api"]
            uriParameters=parameters["queryParameters"]
            paramStr=""
            for parm in uriParameters:
                if parm != "api":
                    paramStr+="{0}={1}&&".format(parm,uriParameters[parm])

            path=path.replace("@","/")
            header = {'tenant':tenant,'Content-type': 'application/json;charset=UTF-8'}
            url="http://127.0.0.1:5000/api/{0}?{1}".format(path,paramStr)
            # print(url)
            r = requests.post(url=url, headers=header, data=json.dumps(parameters))
            if 200 <= r.status_code < 300:
                response=r.json()
                return json.dumps({"status":r.status_code ,"message":response.get("message"),"response":response}) 
            else:
                raise Exception(json.dumps(r.json()))
        except Exception as identifier:
            response=str(identifier)
            if cls.is_json(response) is True:
                response=json.loads(response)
            return json.dumps({"status":500,"message":"Something went wrong","response":response  })

if __name__ == "__main__":
    try:
        base64Payload = sys.argv[1]
        parameters = base64.b64decode(base64Payload)
        parameters = json.loads(parameters)

        if parameters["queryType"] == "rest":
            print(EntityProxy.apiProxy(parameters))
        else:
            raise TypeError("API Not defined")

    except Exception as error:
        print(error)
