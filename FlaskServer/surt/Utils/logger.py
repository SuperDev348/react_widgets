from flask import current_app


class Logger:

    def __init__(self):
        self.logger=current_app.logger

    def info(self,*argv):
        combinedString=""
        for arg in argv:
            combinedString+=" "+arg
        self.logger.info(combinedString)
    
    def debug(self,*argv):
        combinedString=""
        for arg in argv:
            combinedString+=" "+arg
        self.logger.debug(combinedString)

    def warning(self,*argv):
        combinedString=""
        for arg in argv:
            combinedString+=" "+arg
        self.logger.warning(combinedString)

    def error(self,*argv):
        combinedString=""
        for arg in argv:
            combinedString+=" "+arg
        self.logger.error(combinedString)
    
    def fatal(self,*argv):
        combinedString=""
        for arg in argv:
            combinedString+=" "+arg
        self.logger.fatal(combinedString)
    


