const router = require("express").Router({mergeParams:true});

const patientRouter = require("./patients.js");

router.use("/patients", patientRouter);

module.exports = router;