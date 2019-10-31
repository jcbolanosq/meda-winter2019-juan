const jcbolanos = require("./library2.js");

function jcMenu(nA, userName) {

    var vsuma = jcbolanos.suma(100,38);
    var vresta = jcbolanos.restar(100,38);

    console.log(vsuma);
    console.log(vresta);

    console.log(jcbolanos.author);

}

module.exports = {
    jcMenu
};



