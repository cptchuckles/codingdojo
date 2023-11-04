from flask import render_template, abort
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models import Ninja, Dojo


class NinjaController(ControllerBase):
    def __init__(self):
        super().__init__(Ninja)

    def view(self, id: int):
        ninja = Ninja.get_by_id(id)

        if ninja is None:
            return abort(404)

        dojo = Dojo.get_by_id(ninja.dojo_id)

        if dojo is None:
            print("Dojoless ninjas are verboten:", ninja.id)

        return render_template("views/ninja/view.html", ninja=ninja, dojo=dojo)
