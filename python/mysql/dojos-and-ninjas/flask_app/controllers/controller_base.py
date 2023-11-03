from flask import render_template, abort
from flask_app.models.model_base import ModelBase
from flask_app import app


class ControllerBase:
    def __init__(self, model: ModelBase):
        view_name = model.__name__.lower()
        item_name = view_name
        collection_name = view_name + "s"

        @app.route(f"/{view_name}")
        def index():
            collection = model.get_all()
            return render_template(f"views/{view_name}/index.html", **{collection_name: collection})

        @app.route(f"/{view_name}/<int:id>")
        def get_by_id(id: int):
            item = model.get_by_id(id)

            if item is None:
                return abort(404)
            else:
                return render_template(f"/views/{view_name}/view.html", **{item_name: item})
