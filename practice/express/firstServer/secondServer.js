// Use the Express package
const express = require("express");

// run the Express server
const app = express();

// Feed Express server to the HTTP package
const http = require("http").Server(app);

const port = 3000; // replace 80 online


// Tell HTTP to which
http.listen(port);

// Express Routes
app.use("/jc", express.static("./web_files"));

//app.use("/specialfile", express.static("../../../../meda-fall2019-juan/practice/portfolio/"));

// http://localhost:8080/cliente -> Gets sent to -> web_files folder
