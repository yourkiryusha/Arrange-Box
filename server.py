import http.server
import socketserver

with socketserver.TCPServer(("", 8080), http.server.SimpleHTTPRequestHandler) as httpd:
    print("http://localhost:8080/")
    httpd.serve_forever()