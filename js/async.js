// TODO: Create more/better example with some asynchronous things like timers and XHR

window.setTimeout(function() {
    // This will run after approximately 1 second
    console.log("window.setTimeout callback function executing now");
}, 1000);

// When will this run? What does the above statement actually do when it gets executed?
console.log("Code after window.setTimeout running now");


// What is the difference between running a function immediately and running it
// via setTimeout with a delay of 0?

var count = 0;
var incrementCount = function() {
    count++;
    console.log("This function hsa been called " + count + " time(s)");
};

window.setTimeout(function() {
    console.log("0ms timer callback about to call incrementCount");
    incrementCount();
}, 0);
console.log("Call to incrementCount after 0ms timer");
incrementCount();


