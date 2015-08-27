// There's more than one way to do just about everything,
// but there are often good reasons for using one rather than another.
// Here're some ways to loop over an array.
// Which do you typically use? Why?
// Try to think of some advantages and disadvantages
// associated with each case.
// Why might the jQuery.each and _.forEach designers have chosen
// to implement 

var i;
var a = [1, 2, 3, 4, 5];

// Native ECMAScript 5
console.log("while loop");
i = 0;
while (i < a.length) {  
  console.log(a[i]);
  i++;
}

console.log("do-while loop");
i = 0;
do {  
  console.log(a[i]);
  i++;
} while (i < a.length);

console.log("for loop");
for (i = 0; i < a.length; i++)
    console.log(a[i]);

console.log("Array.prototype.forEach");
a.forEach(function(value, index, array) {
    console.log(value);
});

// Using 3rd party libraries
console.log("jQuery.each function");
$.each(a, function(index, value) {
    console.log(value);  
});

console.log("lodash.each function");
_(a).forEach(function(value) {
    console.log(value);  
});

// For a humorous example of 
// how to use goto-like loop
// constructs in JS see
// http://summerofgoto.com/
// Why do you think GOTO statements were not
// made part of the JavaScript/ECMAScript
// language specification?
