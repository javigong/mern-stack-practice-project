const Joi = require("joi");

const registerValidation = (req, res, next) => {
  const newPatientFormSchema = Joi.object({
    patientid: Joi.number().integer().min(1).max(99999999).messages({
      "number.base": "The patient ID must be a number.",
      "number.min": "The patient ID must be a number between 1 and 99999999.",
      "number.max": "The patient ID must be a number between 1 and 99999999.",
    }),
    name: Joi.string().trim().min(2).max(25).empty("").required().messages({
      "string.min": "Invalid patient's name: not enough characters.",
      "string.max": "Invalid patient's name: 20 characters maximum.",
      "any.required": "The patient's name is required",
    }),
    surname: Joi.string().trim().min(2).max(50).empty("").required().messages({
      "string.min": "Invalid patient's surname: not enough characters.",
      "string.max": "Invalid patient's surname: 50 characters maximum.",
      "any.required": "The patient's surname is required",
    }),
    sex: Joi.any()
      .valid("Male", "Female", "Other")
      .empty("")
      .required()
      .messages({
        "any.only": "Please choose one of the given options.",
      }),
    age: Joi.number().integer().min(1).max(125).messages({
      "number.base": "The patient's age must be a number.",
      "number.min": "The patient's age must be a valid number.",
      "number.max": "The patient's age must be a valid number.",
    }),
    address: Joi.string().trim().min(2).max(150).empty("").required().messages({
      "string.min": "Invalid patient's address: not enough characters.",
      "string.max": "Invalid patient's address: 150 characters maximum.",
      "any.required": "The patient's address is required",
    }),
    telephone: Joi.number()
      .integer()
      .min(1000000000)
      .max(9999999999999)
      .messages({
        "number.base": "Invalid telephone number.",
        "number.min": "The telephone number must be 8 digits minimum.",
        "number.max": "The telephone number must be 12 digits maximum.",
      }),
    department: Joi.any()
      .valid(
        "Cardiology",
        "Diagnostic Imaging",
        "Gastroenterology",
        "Gynecology",
        "Hematology",
        "Nephrology",
        "Neurology",
        "Nuclear Medicine",
        "Oncology",
        "Ophthalmology",
        "Otolaryngology",
        "Psychiatry",
        "Rheumatology",
        "Urology"
      )
      .empty("")
      .required()
      .messages({
        "any.only": "Please choose a valid department.",
      }),
    doctor: Joi.string().trim().min(2).max(75).empty("").required().messages({
      "string.min": "Invalid doctor's full name: not enough characters.",
      "string.max": "Invalid doctor's full name: 75 characters maximum.",
      "any.required": "The doctor's full name is required",
    }),
  });

  const { value, error } = newPatientFormSchema.validate(req.body, {
    abortEarly: false,
  });

  req.body = value;

  if (error != undefined) {
    console.error(error);

    res.status(400).send(error.details);
  } else {
    next();
  }
};

module.exports = registerValidation;
