from app.controllers.controller_base import ControllerBase
from app.models.survye import Survey

ControllerBase(Survey).register_crud_routes()
