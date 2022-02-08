const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  patientid: { type: Number, required: true, maxLength: 8 },
  name: { type: String, required: true, maxLength: 25 },
  surname: { type: String, required: true, maxLength: 50 },
  sex: { type: String, enum: ["Male", "Female", "Other"], required: true },
  age: { type: Number, required: true, maxLength: 3 },
  address: { type: String, required: true, maxLength: 150 },
  telephone: { type: String, required: false, maxLength: 13 },
  department: { type: String, required: true, maxLength: 50 },
  doctor: { type: String, required: true, maxLength: 75 },

});

const Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;