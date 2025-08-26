import mongoose from "mongoose";

const dbName = "myDB";
const connectToDb = async () => {
  await mongoose.connect(`mongodb://localhost:27017/${dbName}`);
  console.log(`Connected to database '${dbName}' successfully`);
};

export default connectToDb;
