'use strict';

// Synchronous Operations, (A, B, C), follow one after other
// |----A-----||-----B-----------||-------C------|

// Usage:
// $ node cake_synchronous.js
// OR to get time taken to run
// $ time node cake_synchronous.js


// Basic sleep function based on milliseconds.
// DO NOT USE ON PUBLIC FACING WEBSITES, ONLY FOR DEMONSTRATION
var sleep = function (ms) {
  // Get current time in milliseconds
  var unixtimeMS = new Date().getTime();
  // Check if ms number of milliseconds has passed
  while(new Date().getTime() < unixtimeMS + ms){
    // do nothing
  }
};

// SIMULATE a synchronous operation
var syncOperation = function(message, seconds){
  console.log('\nStart:', message);

  // Do operation
  // 1 second = 1000 milliseconds
  sleep(seconds * 1000);

  // Ok, done now
  console.log('End:', message);
};

// Times shortened to prevent excessive snoring during lesson.
// Make 1 minute = 1 second

// 5 seconds
syncOperation('Warm up oven to 325 degrees for 5 minutes.', 5);
// 1/2 a second
syncOperation('Put three eggs in a mixing bowl.', 0.5);
// 2 seconds
syncOperation('Melt a 1/4 pound of chocolate on a very low flame for 2 minutes.', 2);
// 1 second
syncOperation('Add 2 cups of flour in the mixing bowl and mix vigorously.', 1);
// 1/2 a second
syncOperation('Pour melted chocolate into bowl and mix.', 0.5);
syncOperation('Pour contents of bowl into a cake pan.', 0.5);
syncOperation('Put cake pan in the oven for 5 minutes.', 5);
