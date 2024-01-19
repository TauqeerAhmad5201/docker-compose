const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World from index.js!");
});

app.get('/login', (req, res) => {
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
