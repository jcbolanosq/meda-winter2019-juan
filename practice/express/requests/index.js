const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const http = require("http").Server(app);
const port = 3000;

http.listen(port);

console.log("Express server running on port" + port);

// Needed to read data send through POST request
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false }));


// Express Routes
app.use("/", express.static("./client"));

app.post("/updateData", (request, response) => {

    console.log(request.body.message);

    console.log("We recived a request for updateData");

    let data = {text: "Thank you for your message"};

    response.send(data);
    //response.sendStatus(200);
});

