# Emergency Room application

## Deployment

- Application deployed on Heroku:
https://wmdd4936-jgongoramarrue00.herokuapp.com/

## Description

The app manage an emergency room patient list.

## Features

- Users can create new patients and add them to the patient list through a form.

- The patient list is stored on a MongoDB Atlas database.

- Users can edit any patient from the list.

- Users can delete any patient from the list.

- Data validation implemented using joi.

- REST API implemented using Node.js, Express and mongoose.

- Database implemented on the cloud using MongoDB Atlas.

- Single-page client-side using React.

## How to install

- Run 'npm install' and 'npm start' on your terminal.

- Go to http://localhost:8080/

## How to use

### Add a new patient

- To add a new patient click on the button New Patient.

- Fill the form with the patient's information and save it clicking on the Save button.

### Edit patient's information

- On the patient list, click on the edit button.

- Edit the patient's information and click on the Save button.

### Delete a patient form the list

- To delete a patient click on the delete button.

## API documentation

### Endpoints and methods

- GET method on the endpoint '/api/v1/patients/' to get the list of all the patients.

  - Response format:
    ```json
    {
    "data": [
        {
            "_id": "61a44a449e05a2d14223004a",
            "patientid": 87654321,
            "name": "Isabelle",
            "surname": "Bober",
            "sex": "Female",
            "age": 65,
            "address": "2657 Simons Hollow Road, New York NY 10001",
            "telephone": "5707512016",
            "department": "Oncology",
            "doctor": "Kim Jowett",
            "__v": 0
        },
        {
            "_id": "61a44ae19e05a2d14223004c",
            "patientid": 87654321,
            "name": "Maurice",
            "surname": "Silver",
            "sex": "Male",
            "age": 25,
            "address": "2408 Turkey Pen Road, New York, NY 10013",
            "telephone": "9172935531",
            "department": "Ophthalmology",
            "doctor": "Stephan Rule",
            "__v": 0
        },
        {
            "_id": "61a558a27b67ce99e0db4ec4",
            "patientid": 10010010,
            "name": "Keneth",
            "surname": "Stevens",
            "sex": "Male",
            "age": 24,
            "address": "3044 Hoffman Avenue, New York, NY 10016 ",
            "telephone": "9179265065",
            "department": "Hematology",
            "doctor": "Adolfo Morgan",
            "__v": 0
        }
    ],
    "_links": {
        "self": {
            "href": "/api/v1/patients"
        },
        "/api/v1/patients/:_id": {
            "href": "/api/v1/patients/616f64eb7d368f661f6df999"
        }
    }
}
    ```

- GET method on the endpoint '/api/v1/patients/:id' to retrieve the patient information, passing the patient id as a parameter.

  - Response format:
  ```json
  {
    "data": {
        "_id": "61a44a449e05a2d14223004a",
        "patientid": 87654321,
        "name": "Isabelle",
        "surname": "Bober",
        "sex": "Female",
        "age": 65,
        "address": "2657 Simons Hollow Road, New York NY 10001",
        "telephone": "5707512016",
        "department": "Oncology",
        "doctor": "Kim Jowett",
        "__v": 0
    },
    "_links": {
        "self": {
            "href": "/api/v1/patients/87654321"
        },
        "all-patients": {
            "href": "/api/v1/patients"
        }
    }
  }
  ```

- POST method on the endpoint '/api/v1/patients/' to add a new patient to the patients list (it adds a new patient document to the MongoDB collection).

  - Expect POST body format:
  ```json
  {
    "patientid": 47560020,
    "name": "Robert",
    "surname": "Castro",
    "sex": "male",
    "age": 42,
    "address": "4896 Wayback Lane, Levittown, New York(NY), 11756",
    "telephone": 6313224424,
    "department": "Rheumatology",
    "doctor": "Stephan Rule"
  }
  ```

  - Response format:
  ```json
  {
    "data": {
        "patientid": 47560020,
        "name": "Robert",
        "surname": "Castro",
        "sex": "Male",
        "age": 42,
        "address": "4896 Wayback Lane, Levittown, New York(NY), 11756",
        "telephone": "6313224424",
        "department": "Rheumatology",
        "doctor": "Stephan Rule",
        "_id": "61b7fc302c5ff2979979e324",
        "__v": 0
    },
    "url": "/api/v1/patients/61b7fc302c5ff2979979e324"
  }
  ```

- DELETE method on the endpoint '/api/v1/patients/:id' to delete the patient from the list, passing the patient id as a parameter (it deletes the patient document from the MongoDB collection).

- PATCH method on the endpoint '/api/v1/patients/:id' to edit/update the patient from the list, passing the patient id as a parameter (it edits the patient document from the MongoDB collection).