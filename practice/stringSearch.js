var terminalArguments = process.argv;

characterSearch(terminalArguments[2],terminalArguments[3]);
xword=terminalArguments[3];

characterSearch("This is an example string", "i");

//charArt()
function characterSearch(text, letter) {

    console.log("Searching the string: "+ text);
    var foundLetters =0;

    for (var i=0; i<text.length;i++) {

      if (text.string(i) == letter) {
          foundLetters++;
          //console.log("We found an " + letter + " at index " + i);
      }
    }
    console.log("We found a total of " + foundLetters + " Letter " + letter);
}
