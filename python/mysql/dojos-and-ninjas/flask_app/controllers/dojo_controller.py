from flask import render_template, abort
from flask_app.controllers.controller_base import ControllerBase
from flask_app.models import Dojo, Ninja


class DojoController(ControllerBase):
    def __init__(self):
        super().__init__(Dojo)

    def view(self, id: int):
        pair = Dojo.one_join_many(id, Ninja)
        if pair is None:
            return abort(404)
        else:
            return render_template("/views/dojo/view.html", dojo=pair[0], ninjas=pair[1])
