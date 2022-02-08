import React, { useState, useEffect } from "react";
import NewPatientForm from "./NewPatientForm.js";
import PatientsList from "./PatientsList.js";
import EditPatient from "./EditPatient.js";
import { IoPersonAddSharp } from "react-icons/io5";

const App = () => {
  const [newForm, setNewForm] = useState(false);

  const handleSetNewForm = () => {
    setNewForm(!newForm);
  };

  const [patientsList, setPatientsList] = useState([]);

  const handleSetPatientsList = (data) => {
    setPatientsList(data);
  };

  const [updateList, setUpdateList] = useState();

  const handleUpdateList = () => {
    setUpdateList(!updateList);
  };

  const [modal, setModal] = useState(false);

  const handleCloseEditPatient = () => {
    props.handleCloseEditPatient();
    setModal(false);
  };

  const [selectedPatient, setSelectedPatient] = useState();

  const handleOpenEditPatient = (patientId) => {
    setSelectedPatient(patientId);
    setModal(true);
  };

  return (
    <div className="app">
      <h1>🏥 Emergency Room</h1>

      <button onClick={() => handleSetNewForm()}>
        <IoPersonAddSharp className="icons" />
        New Patient
      </button>

      {newForm && (
        <NewPatientForm
          handleSetNewForm={handleSetNewForm}
          handleUpdateList={handleUpdateList}
        />
      )}

      {modal && (
        <EditPatient
          handleCloseEditPatient={handleCloseEditPatient}
          handleUpdateList={handleUpdateList}
          className="modal"
          patientsList={patientsList}
          selectedPatient={selectedPatient}
        />
      )}

      <PatientsList
        handleSetPatientsList={handleSetPatientsList}
        handleOpenEditPatient={handleOpenEditPatient}
        patientsList={patientsList}
      />
    </div>
  );
};

export default App;
