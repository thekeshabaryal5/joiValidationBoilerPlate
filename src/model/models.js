import { model } from "mongoose";
import personSchema from "../schema/person.schema.js";

export const Person = model("Person", personSchema);
