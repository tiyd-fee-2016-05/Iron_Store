// thanks to http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string

var string = "This is a string.";

var letterCount = (string.match(/i/g) || []).length;

console.log(" ' " + string + "'" +  " contains the letter i " + letterCount + " times.");
