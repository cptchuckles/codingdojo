from flask import render_template, abort, request, redirect
from flask_app.models import ModelBase


class CrudController:
    def __init__(self, model: ModelBase):
        self.model = model
        self.model_name = self.model.__name__.lower()
        self.item_name = self.model_name
        self.collection_name = self.model_name + "s"

    def index(self):
        collection = self.model.get_all()
        return render_template(f"views/{self.model_name}/index.html", **{self.collection_name: collection})

    def view(self, id: int):
        item = self.model.get_by_id(id)

        if item is None:
            return abort(404)
        else:
            return render_template(f"/views/{self.model_name}/view.html", **{self.item_name: item})

    def new(self):
        return render_template(f"/views/{self.model_name}/new.html")

    def create(self, formdata):
        new_id = self.model.create(formdata)
        return redirect(f"/{self.model_name}/{new_id}")

    def edit(self, id: int):
        item = self.model.get_by_id(id)
        if item is None:
            return abort(404)
        else:
            return render_template(f"/views/{self.model_name}/edit", **{self.item_name: item})

    def update(self):
        item = self.model.update(request.form)
        if item is None:
            return abort(500)
        else:
            return redirect(f"/views/{self.model_name}/{item.id}")

    def delete(self, id: int):
        self.model.delete(id)
        return redirect(f"/{self.model_name}")
