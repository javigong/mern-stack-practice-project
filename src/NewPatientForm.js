import React, { useState, useEffect } from "react";
import axios from "axios";

const NewPatientForm = (props) => {
  //! Create Patient (NewPatientForm.js & routes/models/controllers)
  const [errorMessages, setErrorMessages] = useState([]);
  const [success, setSuccess] = useState();

  const handlePatientFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`/api/v1/patients`, {
        patientid: event.target.newPatientId.value,
        name: event.target.newPatientName.value,
        surname: event.target.newPatientSurname.value,
        sex: event.target.newPatientSex.value,
        age: event.target.newPatientAge.value,
        address: event.target.newPatientAddress.value,
        telephone: event.target.newPatientTelephone.value,
        department: event.target.newPatientDepartment.value,
        doctor: event.target.newPatientDoctor.value,
      })
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          setErrorMessages(error.response.data);
        }
      });
    props.handleUpdateList();
  };

  const errorMsg = errorMessages;

  return (
    <div className="newPatientForm">
      <form onSubmit={(event) => handlePatientFormSubmit(event)}>
        <h2>New patient register form:</h2>
        <label htmlFor="newPatientId">
          Patient ID (8 digits):
          <br />
          {errorMsg.length >= 1 &&
          errorMsg.find((error) => error.message.includes("patient ID")) ? (
            <strong style={{ color: "tomato" }}>
              {" "}
              {
                errorMessages.find((error) =>
                  error.message.includes("patient ID")
                ).message
              }{" "}
            </strong>
          ) : (
            ""
          )}
        </label>
        <input type="number" id="newPatientId" name="newPatientId" />

        <label htmlFor="newPatientName">
          Name:
          <br />
          {errorMsg.length >= 1 &&
          errorMsg.find((error) => error.message.includes("patient's name")) ? (
            <strong style={{ color: "tomato" }}>
              {" "}
              {
                errorMessages.find((error) =>
                  error.message.includes("patient's name")
                ).message
              }{" "}
            </strong>
          ) : (
            ""
          )}
        </label>
        <input type="text" id="newPatientName" name="newPatientName" />
        <label htmlFor="newPatientSurname">
          Surname:
          <br />
          {errorMsg.length >= 1 &&
          errorMsg.find((error) =>
            error.message.includes("patient's surname")
          ) ? (
            <strong style={{ color: "tomato" }}>
              {" "}
              {
                errorMessages.find((error) =>
                  error.message.includes("patient's surname")
                ).message
              }{" "}
            </strong>
          ) : (
            ""
          )}
        </label>
        <input type="text" id="newPatientSurname" name="newPatientSurname" />

        <label htmlFor="newPatientSex">
          Sex:
          <br />
          {errorMsg.length >= 1 &&
          errorMsg.find((error) =>
            error.message.includes("Please choose one of the given options.")
          ) ? (
            <strong style={{ color: "tomato" }}>
              {" "}
              {
                errorMessages.find((error) =>
                  error.message.includes(
                    "Please choose one of the given options."
                  )
                ).message
              }{" "}
            </strong>
          ) : (
            ""
          )}
        </label>
        <select id="newPatientSex" name="newPatientSex">
          <option value="">-Please select an option-</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="newPatientAge">
          Age:
          <br />
          {errorMsg.length >= 1 &&
          errorMsg.find((error) => error.message.includes("patient's age")) ? (
            <strong style={{ color: "tomato" }}>
              {" "}
              {
                errorMessages.find((error) =>
                  error.message.includes("patient's age")
                ).message
              }{" "}
            </strong>
          ) : (
            ""
          )}
        </label>
        <input type="text" id="newPatientAge" name="newPatientAge" />

        <label htmlFor="newPatientAddress">
          Address:
          <br />
          {errorMsg.length >= 1 &&
          errorMsg.find((error) =>
            error.message.includes("patient's address")
          ) ? (
            <strong style={{ color: "tomato" }}>
              {" "}
              {
                errorMessages.find((error) =>
                  error.message.includes("patient's address")
                ).message
              }{" "}
            </strong>
          ) : (
            ""
          )}
        </label>
        <textarea
          rows="3"
          cols="50"
          id="newPatientAddress"
          name="newPatientAddress"
        />

        <label htmlFor="newPatientTelephone">
          Telephone:
          <br />
          {errorMsg.length >= 1 &&
          errorMsg.find((error) =>
            error.message.includes("telephone number")
          ) ? (
            <strong style={{ color: "tomato" }}>
              {" "}
              {
                errorMessages.find((error) =>
                  error.message.includes("telephone number")
                ).message
              }{" "}
            </strong>
          ) : (
            ""
          )}
        </label>
        <input
          type="number"
          id="newPatientTelephone"
          name="newPatientTelephone"
        />

        <label htmlFor="newPatientDepartment">
          Department:
          <br />
          {errorMsg.length >= 1 &&
          errorMsg.find((error) =>
            error.message.includes("valid department")
          ) ? (
            <strong style={{ color: "tomato" }}>
              {" "}
              {
                errorMessages.find((error) =>
                  error.message.includes("valid department")
                ).message
              }{" "}
            </strong>
          ) : (
            ""
          )}
        </label>
        <select id="newPatientDepartment" name="newPatientDepartment">
          <option value="">-Please choose a Department-</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Diagnostic Imaging">Diagnostic Imaging</option>
          <option value="Gastroenterology">Gastroenterology</option>
          <option value="Gynecology">Gynecology</option>
          <option value="Hematology">Hematology</option>
          <option value="Nephrology">Nephrology</option>
          <option value="Neurology">Neurology</option>
          <option value="Nuclear Medicine">Nuclear Medicine</option>
          <option value="Oncology">Oncology</option>
          <option value="Otolaryngology">Otolaryngology</option>
          <option value="Psychiatry">Psychiatry</option>
          <option value="Rheumatology">Rheumatology</option>
          <option value="Urology">Urology</option>
        </select>

        <label htmlFor="newPatientDoctor">
          Doctor:
          <br />
          {errorMsg.length >= 1 &&
          errorMsg.find((error) =>
            error.message.includes("doctor's full name")
          ) ? (
            <strong style={{ color: "tomato" }}>
              {" "}
              {
                errorMessages.find((error) =>
                  error.message.includes("doctor's full name")
                ).message
              }{" "}
            </strong>
          ) : (
            ""
          )}
        </label>
        <input type="text" id="newPatientDoctor" name="newPatientDoctor" />
        <br />
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={props.handleSetNewForm}>
            Close
          </button>
        </div>
        <div>
          {errorMsg.length === 0 && success && (
            <strong style={{ color: "green" }}>
              {" "}
              {"Patient successfully saved"}{" "}
            </strong>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPatientForm;
