@echo off

set DOMAIN=sohn-compositions.surge.sh

""git rev-parse HEAD"" > tmp.txt
set /p SUB_DOMAIN= < tmp.txt
echo %SUB_DOMAIN%.%DOMAIN% > dist/CNAME

del tmp.txt

echo http://%SUB_DOMAIN%.%DOMAIN% > url.txt