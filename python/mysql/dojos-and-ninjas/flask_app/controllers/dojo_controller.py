from flask import request
from flask_app import app
from flask_app.controllers.controller_base import CrudController
from flask_app.models import Dojo

controller = CrudController(Dojo)
model_name = Dojo.__name__.lower()


@app.route(f"/{model_name}")
def dojo_index():
    return controller.index()


@app.route(f"/{model_name}/<int:id>")
def dojo_view(id: int):
    return controller.view(id)


@app.route(f"/{model_name}/new")
def dojo_new():
    return controller.new()


@app.route(f"/{model_name}/create", methods=["POST"])
def dojo_create():
    return controller.create(request.form)


@app.route(f"/{model_name}/edit/<int:id>")
def dojo_edit(id: int):
    return controller.edit(id)


@app.route(f"/{model_name}/update", methods=["POST"])
def dojo_update():
    return controller.update(request.form)


@app.route(f"/{model_name}/delete/<int:id>")
def dojo_delete(id: int):
    return controller.delete(id)
