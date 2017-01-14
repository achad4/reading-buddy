from flask import Blueprint
from flask.ext.restful import Api

document_blueprint = Blueprint('document', __name__)
document_blueprint_api = Api(document_blueprint)

from resources.document import DocumentApi
document_blueprint_api.add_resource(DocumentApi, '/document')
