const Patient = require("../models/Patient.js");

// Patient controllers:
const postPatient = (req, res) => {
  let newPatient = new Patient({
    patientid: req.body.patientid,
    name: req.body.name,
    surname: req.body.surname,
    sex: req.body.sex,
    age: req.body.age,
    address: req.body.address,
    telephone: req.body.telephone,
    department: req.body.department,
    doctor: req.body.doctor,
  });

  // Set content-patient header for the response, conformant to HTTP protocol:
  newPatient
    .save()
    .then((result) => {
      res.set("content-patient", `/api/v1/patients/${newPatient._id}`);
      res.status(201).json({
        data: newPatient,
        url: `/api/v1/patients/${newPatient._id}`,
      });
    })
    .catch((error) => res.status(400).send(error));
};

const getPatients = (req, res) => {
  Patient.find({})
    .exec()
    .then((results) => {
      res.json({
        data: results,
        _links: {
          self: { href: `/api/v1/patients` },
          "/api/v1/patients/:_id": {
            href: `/api/v1/patients/616f64eb7d368f661f6df999`,
          },
        },
      });
    })
    .catch((error) => res.status(404).send(error));
};

const getPatient = (req, res) => {
  Patient.findOne({ patientid: req.params.id })
    .exec()
    .then((results) => {
      res.json({
        data: results,
        _links: {
          self: { href: `/api/v1/patients/${req.params.id}` },
          "all-patients": {
            href: `/api/v1/patients`,
          },
        },
      });
    })
    .catch((error) => res.status(404).json(error));
};

const deletePatient = (req, res) => {
  Patient.deleteOne({ _id: req.params.id })
    .then((results) => {
      res.json({
        data: results,
        _links: {
          "all-patients": {
            href: `/api/v1/patients`,
          },
        },
      });
    })
    .catch((error) => res.status(404).json(error));
};

const editPatient = (req, res) => {
  Patient.findOneAndUpdate(
    { _id: req.params.id },
    {
      patientid: req.body.patientid,
      name: req.body.name,
      surname: req.body.surname,
      sex: req.body.sex,
      age: req.body.age,
      address: req.body.address,
      telephone: req.body.telephone,
      department: req.body.department,
      doctor: req.body.doctor,
    }
  )
    .then((results) => {
      res.json({
        data: results,
        _links: {
          self: { href: `/api/v1/patients/${req.params.id}` },
          "all-patients": {
            href: `/api/v1/patients`,
          },
        },
      });
    })
    .catch((error) => res.status(404).json(error));
};

module.exports = {
  postPatient,
  getPatients,
  getPatient,
  deletePatient,
  editPatient,
};
