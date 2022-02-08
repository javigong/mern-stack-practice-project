import React, { useState, useEffect } from "react";
import axios from "axios";

const EditPatient = (props) => {
  const index = props.patientsList.findIndex(
    (item) => item._id === props.selectedPatient
  );

  //! Form Set As Controlled Component

  const [formFields, setFormFields] = useState({
    _id: props.patientsList[index]._id,
    patientid: props.patientsList[index].patientid,
    name: props.patientsList[index].name,
    surname: props.patientsList[index].surname,
    sex: props.patientsList[index].sex,
    age: props.patientsList[index].age,
    address: props.patientsList[index].address,
    telephone: props.patientsList[index].telephone,
    department: props.patientsList[index].department,
    doctor: props.patientsList[index].doctor,
  });

  useEffect(() => {
    console.log(formFields);
  }, []);

  const handleOnChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  };

  //! Edit Patient (EditPatientForm.js & routes/models/controllers)
  const [errorMessages, setErrorMessages] = useState([]);
  const [success, setSuccess] = useState();

  const handleEditPatientSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(`/api/v1/patients/${formFields._id}`, {
        patientid: formFields.patientid,
        name: formFields.name,
        surname: formFields.surname,
        sex: formFields.sex,
        age: formFields.age,
        address: formFields.address,
        telephone: formFields.telephone,
        department: formFields.department,
        doctor: formFields.doctor,
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
    props.handleCloseEditPatient();
  };

  const errorMsg = errorMessages;

  return (
    <div className="newPatientForm">
      <form onSubmit={(event) => handleEditPatientSubmit(event)}>
        <h2>Edit patient form:</h2>
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
        <input
          type="number"
          id="newPatientId"
          name="patientid"
          value={formFields.patientid}
          onChange={handleOnChange}
        />

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
        <input
          type="text"
          id="newPatientName"
          name="name"
          value={formFields.name}
          onChange={handleOnChange}
        />
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
        <input
          type="text"
          id="newPatientSurname"
          name="surname"
          value={formFields.surname}
          onChange={handleOnChange}
        />

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
        <select
          id="newPatientSex"
          name="sex"
          value={formFields.sex}
          onChange={handleOnChange}
        >
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
        <input
          type="number"
          id="newPatientAge"
          name="age"
          value={formFields.age}
          onChange={handleOnChange}
        />

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
          name="address"
          value={formFields.address}
          onChange={handleOnChange}
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
          name="telephone"
          value={formFields.telephone}
          onChange={handleOnChange}
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
        <select
          id="newPatientDepartment"
          name="department"
          value={formFields.department}
          onChange={handleOnChange}
        >
          <option value="">-Please select an option-</option>
          <option
            {...(props.patientsList[index].patientid === "Cardiology" &&
              selected)}
            value="Cardiology"
          >
            Cardiology
          </option>
          <option
            {...(props.patientsList[index].patientid === "Gastroenterology" &&
              selected)}
            value="Gastroenterology"
          >
            Gastroenterology
          </option>
          <option
            {...(props.patientsList[index].patientid === "Diagnostic Imaging" &&
              selected)}
            value="Diagnostic Imaging"
          >
            Diagnostic Imaging
          </option>
          <option
            {...(props.patientsList[index].patientid === "Gynecology" &&
              selected)}
            value="Gynecology"
          >
            Gynecology
          </option>
          <option
            {...(props.patientsList[index].patientid === "Hematology" &&
              selected)}
            value="Hematology"
          >
            Hematology
          </option>
          <option
            {...(props.patientsList[index].patientid === "Nephrology" &&
              selected)}
            value="Nephrology"
          >
            Nephrology
          </option>
          <option
            {...(props.patientsList[index].patientid === "Neurology" &&
              selected)}
            value="Neurology"
          >
            Neurology
          </option>
          <option
            {...(props.patientsList[index].patientid === "Nuclear Medicine" &&
              selected)}
            value="Nuclear Medicine"
          >
            Nuclear Medicine
          </option>
          <option
            {...(props.patientsList[index].patientid === "Oncology" &&
              selected)}
            value="Oncology"
          >
            Oncology
          </option>
          <option
            {...(props.patientsList[index].patientid === "Otolaryngology" &&
              selected)}
            value="Otolaryngology"
          >
            Otolaryngology
          </option>
          <option
            {...(props.patientsList[index].patientid === "Psychiatry" &&
              selected)}
            value="Psychiatry"
          >
            Psychiatry
          </option>
          <option
            {...(props.patientsList[index].patientid === "Rheumatology" &&
              selected)}
            value="Rheumatology"
          >
            Rheumatology
          </option>
          <option
            {...(props.patientsList[index].patientid === "Urology" && selected)}
            value="Urology"
          >
            Urology
          </option>
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
        <input
          type="text"
          id="newPatientDoctor"
          name="doctor"
          value={formFields.doctor}
          onChange={handleOnChange}
        />
        <br />
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={props.handleCloseEditPatient}>
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

export default EditPatient;
