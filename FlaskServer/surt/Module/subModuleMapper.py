from .subModule.job import Job
from .subModule.host import Host
from .subModule.server import Server

class Mapper:
    def call(self, module):    
        if module == "job":
            return Job().getAll()
        elif module == "host":
            return Host().getAll()
        elif module == "server":
            return Server().getData()
