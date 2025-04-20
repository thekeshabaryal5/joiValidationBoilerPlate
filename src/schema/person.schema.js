import { Schema } from "mongoose";

const personSchema = Schema({
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
  },
  isMarried: {
    type: Boolean,
  },
  spouseName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  dob: {
    type: Date,
  },
  hobbies: [
    {
      type: String,
    },
  ],
  location: {
    province: {
      type: String,
    },
    district: {
      type: String,
    },
  },
  favSubject: [
    {
      bookName: {
        type: String,
      },
      bookAuthor: {
        type: String,
      },
    },
  ],
});

export default personSchema;
