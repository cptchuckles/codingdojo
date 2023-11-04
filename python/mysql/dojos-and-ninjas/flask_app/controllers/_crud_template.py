from flask import request
from flask_app import app
from flask_app.controllers.controller_base import CrudController
from flask_app.models import MODEL

controller = CrudController(MODEL)
model_name = MODEL.__name__.lower()


@app.route(f"/{model_name}")
def XXX_index():
    return controller.index()


@app.route(f"/{model_name}/<int:id>")
def XXX_view(id: int):
    return controller.view(id)


@app.route(f"/{model_name}/new")
def XXX_new():
    return controller.new()


@app.route(f"/{model_name}/create", methods=["POST"])
def XXX_create():
    return controller.create(request.form)


@app.route(f"/{model_name}/edit/<int:id>")
def XXX_edit(id: int):
    return controller.edit(id)


@app.route(f"/{model_name}/update", methods=["POST"])
def XXX_update():
    return controller.update(request.form)


@app.route(f"/{model_name}/delete/<int:id>")
def XXX_delete(id: int):
    return controller.delete(id)
