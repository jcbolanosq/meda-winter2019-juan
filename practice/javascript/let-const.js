for (let i=0;i<20;i++) {
    setTimeout(function() {
        console.log(i);
    },500)
}

for (var i=0;i<20;i++) {
    setTimeout(function() {
        console.log(i);
    },500)
}
