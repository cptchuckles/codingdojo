from flask import render_template, abort
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models import Ninja, Dojo


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
