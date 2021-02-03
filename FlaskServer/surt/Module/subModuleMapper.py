from .subModule.job import Job
from .subModule.host import Host

class Mapper:
    def call(self, module):
        if module == "job":
            return Job().getAll()
        elif module == "host":
            return Host().getAll()
