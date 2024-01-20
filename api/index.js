const express = require("express");
const app = express();
const fs = require("fs");
var cors = require('cors')
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World from index.js!");
});

app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/public/html/login.html`);
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// With middleware
app.use("/render", function (req, res, next) {
  res.send({ name: "Tauqeer Ahmad" });
  next();
});

app.use("/learning", function (req, res, next) {
  console.log("Request is Incoming");

  const responseData = {
    message: "Hello, Tauqeer",
    articleData: {
      articleName: "Preparing backend for Docker Compose",
      category: "NodeJS",
      status: "published",
    },
    endingMessage: "Visit Geeksforgeeks.org for more",
  };
  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
  next();
});

app.get("/users", (req, res) => {
  // Read the file asynchronously and parse the data
  fs.readFile(`${__dirname}/data/json/details.json`, "utf8", (err, data) => {
    if (err) {
      // Handle the error if the file cannot be read
      console.error(err);
      res.status(500).send("Something went wrong");
    } else {
      // Parse the JSON data and send it as a response
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
