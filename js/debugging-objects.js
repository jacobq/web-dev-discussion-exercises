// Know your browser's debug tools
// (tested in Chrome 43, Firefox 38, and IE11)

var x = {
    a: {
        one: 1,
        two: 2
    }
};

console.log("x.a", x.a);     // a = {one: 1, two: 2}
console.log("x", x);         // x = {a: {}} 
                             // where did x.a.one & x.a.two go?

delete x.a;                  // Removes property with name "a" from x
console.log("x", x);         // x = {}

// Try using your browser's development tools to set a breakpoint.
// https://developer.chrome.com/devtools/docs/javascript-debugging
// Do you see the same behavior? Why / why not?
