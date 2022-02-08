const express = require("express");
const app = express();
const connection = require("./db/connection.js");

connection.once("open", () => {
  const server = app.listen(process.env.PORT || 8080, () => {
    console.log("Connected and listening");
  });
});

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const router = require("./routes/index.js");
app.use("/api/v1", router);
