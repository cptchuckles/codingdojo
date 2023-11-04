from flask import render_template, abort, request, redirect
from flask_app.models import ModelBase
from flask_app import app


def register_crud_routes_for(model: ModelBase):
    model_name = model.__name__.lower()
    item_name = model_name
    collection_name = model_name + "s"

    @app.route(f"/{model_name}", endpoint=f"{model_name}_index")
    def index():
        collection = model.get_all()
        return render_template(f"views/{model_name}/index.html", **{collection_name: collection})

    @app.route(f"/{model_name}/<int:id>", endpoint=f"{model_name}_view")
    def view(id: int):
        item = model.get_by_id(id)

        if item is None:
            return abort(404)
        else:
            return render_template(f"/views/{model_name}/view.html", **{item_name: item})

    @app.route(f"/{model_name}/new", endpoint=f"{model_name}_new")
    def new():
        return render_template(f"/views/{model_name}/new.html")

    @app.route(f"/{model_name}/create", methods=["POST"], endpoint=f"{model_name}_create")
    def create():
        new_id = model.create(request.form)
        return redirect(f"/{model_name}/{new_id}")

    @app.route(f"/{model_name}/edit/<int:id>", endpoint=f"{model_name}_edit")
    def edit(id: int):
        item = model.get_by_id(id)
        if item is None:
            return abort(404)
        else:
            return render_template(f"/views/{model_name}/edit", **{item_name: item})

    @app.route(f"/{model_name}/update", methods=["POST"], endpoint=f"{model_name}_update")
    def update():
        item = model.update(request.form)
        if item is None:
            return abort(500)
        else:
            return redirect(f"/views/{model_name}/{item.id}")

    @app.route(f"/{model_name}/delete/<int:id>", endpoint=f"{model_name}_delete")
    def delete(id: int):
        model.delete(id)
        return redirect(f"/{model_name}")
