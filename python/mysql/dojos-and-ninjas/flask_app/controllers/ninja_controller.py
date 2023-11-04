from flask import render_template, abort, request
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models import Ninja, Dojo
from flask_app import app


class NinjaController(ControllerBase):
    def __init__(self):
        super().__init__(Ninja)

    def view(self, id: int):
        ninja_with_dojo = Ninja.many_join_one(id, Dojo)

        if ninja_with_dojo is None:
            return abort(404)

        ninja = ninja_with_dojo[0]
        dojo = ninja_with_dojo[1]

        return render_template("views/ninja/view.html", ninja=ninja, dojo=dojo)

    def new(self):
        dojo_id = request.args.get("dojo_id")
        if dojo_id is not None:
            dojo_id = int(dojo_id)
        return render_template("views/ninja/new.html", dojo_id=dojo_id, dojos=Dojo.get_all())
