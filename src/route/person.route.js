import { Router } from "express";
import {
  createPersonController,
  deletePersonController,
  readAllPersonController,
  readPersonController,
  updatePersonController,
} from "../controller/person.controller.js";

import validate from "../middleware/person.validation.middleware.js";
import personValidationRule from "../validation/person.validation.js";

let personRouter = Router();

personRouter
  .route("/")
  .post(validate(personValidationRule), createPersonController)
  .get(readAllPersonController);

personRouter
  .route("/:id")
  .get(readPersonController)
  .patch(updatePersonController)
  .delete(deletePersonController);

export default personRouter;
