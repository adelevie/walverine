/*
  TODO: Add an actual testing library.
  Until then, just make sure this script works.
*/
var walverine = require('./walverine');
var input = "I am a cat. Smith v. Hardibble, 111 Cal.2d 222, 555, 558, 333 Cal.3d 444 (1988)";
var cites = walverine.get_citations(input);
console.log(cites);