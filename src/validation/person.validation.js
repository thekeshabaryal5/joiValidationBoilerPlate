import Joi from "joi";
import district from "../const/district.info.js";
import province from "../const/province.info.js";
const personValidationRule = Joi.object()
  .keys({
    //name must be a string with not special characters allowed expect a space in between
    name: Joi.string()
      .required()
      .min(2)
      .max(100)
      .custom((value, msg) => {
        if (value.match(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)) {
          return true;
        } else {
          return msg.message("Invalid name provided");
        }
      })
      .messages({
        "any.required": "Name field is required",
        "string.base": "Name must be a string",
        "string.min": "Name must be at least two characters long",
        "string.max": "Name can be at most 100 characters long",
      }),
    //by default the empty string is not accepted in the string types. In order to bypass it use
    //Joi.string(). .... .allow("") ----> use allow("")

    //gender can be either male(Male), female(Female) or other(Other)
    gender: Joi.string()
      .required()
      .custom((value, msg) => {
        if (["male", "female", "other"].includes(value.toLowerCase())) {
          return true;
        } else {
          return msg.message("Gender can be one of male,female or other");
        }
      })
      .messages({
        "any.required": "Gender field is required",
        "string.base": "Gender must be a string",
      }),

    //is married is a boolean value and can be either true or false.
    isMarried: Joi.boolean().required().messages({
      "any.required": "isMarried field is required",
      "boolean.base": "isMarried field should be either true or false",
    }),

    // spouse name is required for married person
    spouseName: Joi.when("isMarried", {
      is: true,
      then: Joi.string()
        .required()
        .min(2)
        .max(100)
        .custom((value, msg) => {
          if (value.match(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)) {
            return true;
          } else {
            return msg.message("Invalid spouse name provided");
          }
        })
        .messages({
          "any.required": "Spouse name is required for married person",
          "string.base": "Spouse name must be a string",
          "string.min": "Spouse Name must be at least two characters long",
          "string.max": "Spouse Name can be at most 100 characters long",
        }),
      otherwise: Joi.string(),
    }),

    //email must be a valid email address
    email: Joi.string()
      .required()
      .custom((value, msg) => {
        if (value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/)) {
          return true;
        } else {
          return msg.message("Invalid email provided");
        }
      })
      .messages({
        "any.required": "email field is required",
        "string.base": "email must be a string",
      }),

    //phone number is a string with 10 digits with optional +977
    phoneNumber: Joi.string()
      .required()
      .custom((value, msg) => {
        let isValidEmail = value.match(/^(?:\+977[- ]?)?(98\d{8})$/);
        if (isValidEmail) {
          return true;
        } else {
          return msg.message(
            "Invalid mobile number. Please enter a valid 10-digit Nepali mobile number starting with 98. You may optionally include the country code +977."
          );
        }
      }),

    // date of birth must be a valid date and cann't be in future
    dob: Joi.date().less("now").required().messages({
      "date.less": "Date of birth cannot be in the future.",
      "date.base": "Please enter a valid date.",
      "any.required": "Date of birth is required.",
    }),

    //hobbies is an array with string value inside
    hobbies: Joi.array()
      .items(
        Joi.string().required().messages({
          "any.required": "at least one hobby should be mentioned",
          "string.base": "Hobbies should be in string format only",
        })
      )
      .required()
      .min(1)
      .messages({
        "any.required": "Hobbies should be mentioned",
      }),

    // location is an array with fields province and district

    location: Joi.object()
      .keys({
        province: Joi.string()
          .required()
          .custom((value, msg) => {
            if (province.includes(value.toLowerCase())) {
              return true;
            } else {
              return msg.message(`${value} is not a valid province name`);
            }
          })
          .messages({
            "any.required": "province should be mentioned",
            "string.base": "province should be in string format only",
          }),
        district: Joi.string()
          .required()
          .custom((value, msg) => {
            if (district.includes(value.toLowerCase())) {
              return true;
            } else {
              return msg.message(`${value} is not a valid district name`);
            }
          })
          .messages({
            "any.required": "district should be mentioned",
            "string.base": "district should be in string format only",
          }),
      })
      .required()
      .messages({
        "any.required": "Location is required",
        "object.base":
          "location must be object with keys province and district",
      }),

    // favSubjects being array of objects
    favSubject: Joi.array()
      .items(
        Joi.object()
          .keys({
            bookName: Joi.string().required().messages({
              "any.required": "bookName should be mentioned",
              "string.base": "bookName should be in string format only",
            }),
            bookAuthor: Joi.string().required().messages({
              "any.required": "bookAuthor should be mentioned",
              "string.base": "bookAuthor should be in string format only",
            }),
          })
          .required()
          .messages({
            "any.required": "Favourite subject is required",
            "object.base": "Provide an array of object for favourite subject",
          })
      )
      .min(1)
      .required()
      .messages({
        "any.required":
          "Favourite subject name with bookname and bookAuthor is required",
        "array.base": "Favourite subject should be in array",
      }),
  })
  .unknown(false);

export default personValidationRule;
