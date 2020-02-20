import os
from http.server import HTTPServer, CGIHTTPRequestHandler
import os
 
webdir = os.getcwd() #текущая директория
port = 80
os.chdir(webdir)
srvraddr = ('', port)
srvrobj = HTTPServer(srvraddr, CGIHTTPRequestHandler)
srvrobj.serve_forever()#обслуживать клиентов до завершения
