from flask import render_template, abort, request, redirect
from flask_app.models import ModelBase
from flask_app import app


def register_crud_routes_for(model: ModelBase):
    model_name = model.__name__.lower()
    item_name = model_name
    collection_name = model_name + "s"

    @app.route(f"/{model_name}", endpoint=f"{model_name}/index")
    def index():
        collection = model.get_all()
        return render_template(f"views/{model_name}/index.html", **{collection_name: collection})

    @app.route(f"/{model_name}/<int:id>", endpoint=f"{model_name}/view")
    def view(id: int):
        item = model.get_by_id(id)

        if item is None:
            return abort(404)
        else:
            return render_template(f"/views/{model_name}/view.html", **{item_name: item})

    @app.route(f"/{model_name}/new", endpoint=f"{model_name}_new")
    def new():
        return render_template(f"/views/{model_name}/new.html")

    @app.route(f"/{model_name}/create", methods=["POST"], endpoint=f"{model_name}/create")
    def create():
        new_id = model.create(request.form)
        return redirect(f"/{model_name}/{new_id}")

    @app.route(f"/{model_name}/edit/<int:id>", endpoint=f"{model_name}_edit")
    def edit(id: int):
        item = model.get_by_id(id)
        if item is None:
            return abort(404)
        else:
            return render_template(f"/views/{model_name}/edit.html", **{item_name: item})

    @app.route(f"/{model_name}/update", methods=["POST"], endpoint=f"{model_name}/update")
    def update():
        item = model.update(request.form)
        if item is None:
            return abort(500)
        else:
            return redirect(f"/views/{model_name}/{item.id}")

    @app.route(f"/{model_name}/delete/<int:id>", endpoint=f"{model_name}/delete")
    def delete(id: int):
        model.delete(id)
        return redirect(f"/{model_name}")


def register_one_to_many_routes(one: ModelBase, many: ModelBase):
    one_name = one.__name__.lower()
    many_name = many.__name__.lower()
    many_collection = many_name + "s"

    @app.route(f"/{one_name}/<int:id>/{many_name}", endpoint=f"{one_name}/has/{many_name}s")
    def one_to_many(id: int):
        one_has_many = one.one_join_many(id, many)
        if one_has_many is None:
            return abort(404)
        else:
            return render_template(f"/views/{many_name}/index.html", **{many_collection: one_has_many[1]})
