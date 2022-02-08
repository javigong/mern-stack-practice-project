import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDeleteForever, MdEditNote } from "react-icons/md";


const PatientsList = (props) => {
  const patientsList = props.patientsList;

  //! Get Patients List:
  useEffect(function loadPatientsList() {
    axios
      .get("/api/v1/patients")
      .then((result) => {
        props.handleSetPatientsList(result.data.data);
      })
      .catch((error) => console.log(error));
      
  });

  const handleDeletePatient = (id) => {
    axios
      .delete(`/api/v1/patients/${id}`)
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h2>Patient list:</h2>
      {patientsList ? (
        <div>
        <div className="headerRow">
          <ul className="styleRow">
            <li>Patient ID</li>
            <li>Name</li>
            <li>Surname</li>
            <li>Department</li>
            <li>Doctor</li>
            <li>Edit</li>
            <li>Delete</li>
          </ul>
        </div>
          {patientsList.map((patient, key) => (
            <div className="patientRow" key={key}>
              <ul className="styleRow">
                <li>{`${patient.patientid}`}</li>
                <li>{`${patient.name}`}</li>
                <li>{`${patient.surname}`}</li>
                <li>{`${patient.department}`}</li>
                <li>{`${patient.doctor}`}</li>
                <li>
                <button onClick={()=>props.handleOpenEditPatient(patient._id)}>
                <MdEditNote className="icons" />
                </button>
                </li>
                <li>
                <button onClick={()=>handleDeletePatient(patient._id)} >
                <MdDeleteForever className="icons" 
                />
                </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default PatientsList;
