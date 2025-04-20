import expressAsyncHandler from "express-async-handler";
import { Person } from "../model/models.js";

// create person controller
export const createPersonController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Person.create(req.body);

    res.status(201).json({
      success: true,
      message: "Created person successfully",
      result: result,
    });
  }
);

// read all person controller
export const readAllPersonController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Person.find({});
    res.status(200).json({
      success: true,
      message: "All person read successfully",
      result: result,
    });
  }
);

// read specific person controller
export const readPersonController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Person.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Read specified person successfully",
      result: result,
    });
  }
);

// update specific person controller
export const updatePersonController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Updated specified person successfully",
      result: result,
    });
  }
);

//delete specific person controller
export const deletePersonController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Person.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Deleted specified person successfully",
      result: result,
    });
  }
);
