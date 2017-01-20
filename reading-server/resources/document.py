from flask import Flask, render_template, request
from werkzeug import secure_filename
from flask_restful import Resource
from flask_mongo import PyMongo

class DocumentApi(Resource):
	def post(self):
		print("POST")
		print(request.form)
		f = request.files['file']
		print(f)
		f.save(secure_filename(f.filename))

	def post(self):
		print("GET")
		return "sup bro"
