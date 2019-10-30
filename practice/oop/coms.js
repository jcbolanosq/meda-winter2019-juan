var eduardoLibrary = require("./library");
var jcbolanos = require("./library2.js");

function runAll(nA, userName) {

    var results = eduardoLibrary.mathify(nA[0], nA[1], nA[2], nA[3]);

    var vsuma = jcbolanos.suma(100,38);
    var vresta = jcbolanos.restar(100,38);

    console.log(results);

    console.log(vsuma);
    console.log(vresta);

    console.log(jcbolanos.author);

}

module.exports = {
    runAll
};



