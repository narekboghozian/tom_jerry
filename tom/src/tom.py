from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response

def hello_world(req):
    return Response("Hello World!")

if __name__ == '__main__':
    with Configurator() as config:

        config.add_static_view('/', 'static')

        app = config.make_wsgi_app()

    server = make_server('0.0.0.0', 2222, app)
    print('Web server started on: http://0.0.0.0:2222')
    server.serve_forever()
