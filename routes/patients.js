const registerValidation = require("../validation");
const router = require("express").Router({ mergeParams: true });
const {
  getPatients,
  getPatient,
  postPatient,
  deletePatient,
  editPatient,
} = require("../controllers/patientControllers.js");

// Patient Registration routes:
router.get("/", getPatients);
router.get("/:id", getPatient);
router.post("/", registerValidation, postPatient);
router.delete("/:id", deletePatient);
router.patch("/:id", editPatient);

module.exports = router;
