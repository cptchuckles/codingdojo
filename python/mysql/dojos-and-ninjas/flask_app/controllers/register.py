from flask import render_template, abort
from flask_app.models import ModelBase
from flask_app import app


def register_one_to_many_routes(one: ModelBase, many: ModelBase):
    one_name = one.__name__.lower()
    many_name = many.__name__.lower()
    many_collection = many_name + "s"

    @app.route(f"/{one_name}/<int:id>/{many_name}s", endpoint=f"{one_name}/has/{many_name}s")
    def one_to_many(id: int):
        one_has_many = one.one_join_many(id, many)
        if one_has_many is None:
            return abort(404)
        else:
            return render_template(
                f"/views/{many_name}/index.html",
                **{
                    one_name: one_has_many[0],
                    many_collection: one_has_many[1],
                })
