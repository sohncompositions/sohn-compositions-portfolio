@echo off
setlocal enabledelayedexpansion

""git rev-parse --abbrev-ref HEAD"" > tmp.txt
set /p NAME= < tmp.txt
set /p URL= < url.txt
set /p DESCRIPTION=Description (Optional): 
set /p VERSION=Version (Required): 

echo {"name": "%NAME%", "description": "%DESCRIPTION%", "version": "%VERSION%", "url":"%URL%"} > version.json

set VERSION_HISTORY_URL= http://version-history-manager.herokuapp.com/versions
curl -i -X POST -H "Content-Type:application/json" -d @version.json %VERSION_HISTORY_URL%

del tmp.txt
del url.txt
del version.json