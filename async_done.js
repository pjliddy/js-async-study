/////////////////////////////////////////////////////
// Simple setTimeout, pass a function that has no
// parameters

var numSeconds = 3;

var helloWorld = function(){
  console.log("Hello World");
};


// After 3000 milliseconds, 3 seconds,
// execute a function
setTimeout(helloWorld, numSeconds * 1000);

/////////////////////////////////////////////////////
// setTimeout, pass a function that has a
// parameter

// function that just logs a message
var say = function(message){
  console.log(message);
};

// After 3000 milliseconds, 3 seconds,
setTimeout(say, 4 * 1000, "Hello Tom");


/////////////////////////////////////////////////////
// setTimeout, pass a function that has a
// parameter. Use Closure!

var newMessage = "FishCake";

// After 3000 milliseconds, 3 seconds,
setTimeout(function(){
  // creates a closure that captures the newMessage
  // variable
  say(newMessage);
}, 5 * 1000);
