from flask import Flask
from flask_cors import CORS

import config

server = Flask(__name__)
server.debug = config.DEBUG

CORS(
    server,
    resources={r"/*": {"origins": "*"}},
    headers=['Content-Type', 'X-Requested-With', 'Authorization']
)

from routes.document import document_blueprint
server.register_blueprint(document_blueprint)

from routes.common import common_blueprint
server.register_blueprint(common_blueprint)

if __name__ == '__main__':
    server.run(host=config.HOST, port=config.PORT)