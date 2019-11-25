const mongoose = require("mongoose");

const dbConnect = "mongodb+srv://practiceUser:practice@cluster0-pqvda.mongodb.net/test?retryWrites=true&w=majority"

// userMongo:1234   -   practiceUser:pratice

// Additional options when connecting to mongodb
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};

// connect to the MongoDb
mongoose.connect(dbConnect, options, error => {

    // When a MongoDb responds, text if an error was recieved
    if (error) {
        console.log("cannot connecte", error.reason);
        
    }else {
        console.log("Successfully conected !!!");
    }
});

// store the  object "connection", in a variable called db
let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

// Tell mongoose what a Promise is by providing the Class to it
mongoose.Promise = global.Promise;

// Finished connecting to MongoDB.

// A schema for our database
let Schema = mongoose.Schema;

let practiceSchema = new Schema ({
    note: String,
    old: Boolean,
    timesUpdated: Number
});

// This is the accion poin : myfirstcollection
let practiceModel = new mongoose.model("myfirstcollection", practiceSchema);

//Addinformation();

function Addinformation() {
let newEntry = new practiceModel({
    note: "Information saving on the database",
    old: false,
    timesUpdated: 1
});

newEntry.save((error) => {
    if (error) {
        console.log("There was an error at MongoDB Atlas "+ error);
    } else {
        console.log("We saved the data!");
    }
});
}
//*********

// Read an object with the criteria to search the database with.
let searchCriteria = {
    note: 'Information saving on the database'
};

// Actually search the database
practiceModel.find(searchCriteria, (error, results) => {
    if (error) {
        console.log("Something went wrong! " + error);
    } else {
        console.log(results);
    }
});

