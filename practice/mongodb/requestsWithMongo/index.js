const fs = require("fs");
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
// First Argument is the route name, second argument is directory to load when someone request the route name.
app.use("/", express.static("./client"));

// An http Post Handler called /submitComment

let filename = "commentHistory.json";


app.post("/submitComment", (request, response) => {

    // Rename the data sent to us (located in request.body) to something simpler like objectFromRequest.
    let objectFromRequest = request.body;

    // console.log(objectFromRequest.message);
    console.log(objectFromRequest);

    //let text = objectFromRequest.message;
    //console.log("We received a request for submitComment: " + text);

 
    if ( fs.existsSync(filename)) {

        let comments = fs.readFileSync(filename, "utf8");
        comments = JSON.parse(comments);
        comments.commentsArray.push(objectFromRequest);
        comments = JSON.stringify(comments);
        fs.writeFileSync(filename, comments, "utf8");
        console.log("New comment saved to hard drive");
    } else {
        let comments = {commentsArray: [objectFromRequest]};
        comments = JSON.stringify(comments);

        fs.writeFileSync(filename, comments, "utf8");
        console.log("Note: No save file detected, creating a new file");

    }

    // if you don't want to send any data bac, you can use. sendStatus(). You can only use sendStatus or send once to "fulfill" front-end request.
    // response.sendStatus(200); //like return

    // let data = {text: "Thank you for your message"};
    // response.send(data);
    
    response.sendStatus(200);
});

app.post("/loadComments", (request, response) => {

    if (fs.existsSync("commentHistory.json")) {

        let comments = fs.readFileSync(filename, "utf8");
        comments = JSON.parse(comments);

        response.send(comments);
    }else {
        response.sendStatus(500);
    }


});

