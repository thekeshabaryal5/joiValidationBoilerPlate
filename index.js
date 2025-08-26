import express, { json } from "express";
import connectToDb from "./src/connectToMongoDb/connectMongoDb.js";
import errorMiddleware from "./src/middleware/error.middleware.js";
import personRouter from "./src/route/person.route.js";

const port = 8000;

//creating an express app
const app = express();

//enabling app to use json.
app.use(json());

//assigning a port to express app
app.listen(port, () => {
  console.log(`Express app running at port ${port}`);

  //connecting to Db
  connectToDb();
});

app.use("/person", personRouter);

// handaling error via errorMiddleware
app.use(errorMiddleware);
