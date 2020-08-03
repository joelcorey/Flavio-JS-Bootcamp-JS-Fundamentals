/**
Import necessary code, objects, and classes
This keeps everything nice and tidy
*/
import House from './house.js';
import houseData from './data.js';

/**
Unlike functions classes are not hoisted. They
must be declared before use. Functions are read in to
memory first(hoisting) so out of order calling of functions
is okay in JavaScript. Classes are not read in to memoery in
this fashion.
*/
let myHouse = new House(houseData);

// myHouse.description;

console.log(myHouse.area);
// console.log(squareFootage);
