import datetime


def getDateTimeFromSapDatestr(date):
    year=int(date.split(".")[2])
    month=int(date.split(".")[1])
    day=int(date.split(".")[0])
    return datetime.datetime(year=year,month=month,day=day)


def parseDateFromString( dateString):
    return str(dateString[len(dateString) - 2:] + "." + dateString[4:len(dateString) - 2] + "." + dateString[:4])

def convertBooleanToDatabseEquivalent(value):
    return 1 if value==True else 0