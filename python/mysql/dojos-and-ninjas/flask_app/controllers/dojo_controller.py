from flask import render_template, abort, request
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models import Dojo, Ninja


class DojoController(ControllerBase):
    def __init__(self):
        super().__init__(Dojo)

    def view(self, id: int):
        dojo_with_ninjas = Dojo.one_join_many(id, Ninja)

        if dojo_with_ninjas is None:
            return abort(404)

        dojo = dojo_with_ninjas[0]
        ninjas = dojo_with_ninjas[1]

        return render_template("/views/dojo/view.html",
                               dojo=dojo,
                               ninjas=ninjas,
                               whence=request.url)
