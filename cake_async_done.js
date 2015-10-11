'use strict';

// ASynchronous Operations, (A, B, C), may be performed at
// same time.
//  |----A-----|
//    |-----B-----------|
//        |-------C------|

// Usage:
// $ node cake_async.js
// OR to get time taken to run
// $ time node cake_async.js

// SIMULATE an asynchronous operation
var asyncOperation = function(message, seconds){
  console.log('Start:', message);

  // Do operation and let me know when it's done, eh.
  setTimeout(function(){
    console.log('End:', message);
  }, seconds * 1000);
};

// Times shortened to prevent excessive snoring during lesson.
// Make 1 minute = 1 second

// 5 seconds
asyncOperation('Warm up oven to 325 degrees for 5 minutes.', 5);
// 1/2 a second
asyncOperation('Put three eggs in a mixing bowl.', 0.5);
// 2 seconds
asyncOperation('Melt a 1/4 pound of chocolate on a very low flame for 2 minutes.', 2);
// 1 second
asyncOperation('Add 2 cups of flour in the mixing bowl and mix vigorously.', 1);
// 1/2 a second
asyncOperation('Pour melted chocolate into bowl and mix.', 0.5);
asyncOperation('Pour contents of bowl into a cake pan.', 0.5);
asyncOperation('Put cake pan in the oven for 5 minutes.', 5);
