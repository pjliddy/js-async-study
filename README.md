![General Assembly Logo](http://i.imgur.com/ke8USTq.png)


## Objectives

* Create an operation that executes asynchronously.
* Compare Synchronous vs Asynchronous operations.
* Create Blocking and Non-Blocking operations.


## Synchronous vs Asynchronous

Typically, a computer *runs* a set of operations one after another. 

For example, if we have operations A, B and C the computer will: 

1. Run operaton A to completion.
2. Run operation B to completion.
3. Run operation C to completion.

> |----A-----||-----B-----------||-------C------|

But this can be a problem if some operations take too long. For example, if during the execution of an application it's need to **access the disk**. Or if the application needs to **make a HTTP Request** to a remote server over the internet.

**The application will grind to a complete stop** waiting for these relatively slow operations.

The application could also grind to a halt if it **needs user input**. For example, **if the application is a browser and the HTML page needs user input.**

The browser could be just stop working until the user decided to **select a link** or **enter input to a form.** 

For these cases we to use **Asynchronous** operations.

*Asynchronous Operations, (A, B, C), may be performed at same time.*
>|----A-----|                                                                                      
>>|-----B-----------|                                                                             
>>>|-------C------| 

We will simulate **Synchronous (sync)** and **Asynchronous (async)** operations using JS **setTimeout**. 

### We Do:

#### Synchronous operations.  

**Create a file sync.js.**

```javascript
// Synchronous Operations, (A, B, C), 
// follow one after other                                          
// |----A-----||-----B-----------||-------C------|                                                    

// Operation A is to log "Hello World"                                                                
console.log("Hello World");

// Operation B is to add 37 to 5                                                                      
37 + 5;

// Operation C is log the length of the string "Fishcake"                                             
console.log("Fishcake".length);
```


#### Asynchronous operations.

We can also run operations asynchronously. Overlapping the execution of operations.

*Asynchronous Operations, (A, B, C), may be performed at same time.*
>|----A-----|                                                                                      
>>|-----B-----------|                                                                             
>>>|-------C------| 

To simulate **async** operations we need to see javascript's setTimeout function.

##### Javascript setTimeout

Take a look at 
[setTimeout](https://nodejs.org/docs/v0.6.1/api/timers.html#setTimeout)

### We Do:

**Create a file async.js.**

```javascript
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

// After 4000 milliseconds, 4 seconds,
setTimeout(say, 4 * 1000, "Hello Tom");


/////////////////////////////////////////////////////
// setTimeout, pass a function that has a
// parameter. Use Closure!

var newMessage = "FishCake";

// After 5000 milliseconds, 5 seconds,
setTimeout(function(){
  // creates a closure that captures the newMessage
  // variable
  say(newMessage);
}, 5 * 1000);

```


Run ``$ node async.js``


Let's notice how much time it took to run the above operations. *We're going to use the unix ``time`` command.*

Run ``$ time node async.js``

Notice the amount of time taken to run all of the operations was only five seconds? Shouldn't this take, 3 + 4 + 5, 12 seconds?

We'll it would if these operations were executed one after another, **synchronously**. When we use ``setTimeout`` we are **simulating async operations**.


### You Do

You're a short order cook that can provide hamburgers, hotdogs and sandwiches. And you can be preparing multiple orders at the same time in an **async** manner.

A hamburger takes 5 minutes to cook, a hotdog 3 minutes and a sandwich takes 1 minute to prepare.

Write some code, using setTimeout, to simulate preparing these orders **asynchronously.**

* hotdog
* sandwich
* hamburger
* sandwich
* hotdog

Create a function that will simulate preparing each food item. This function should log ``Prepared <food item name>`` Call setTimeout with the correct number of seconds needed to prepare each food item.  

> Make 1 second in your code == 1 minute in the cooks world

>  Find the time it takes to prepare all these orders.

> Work in groups.

## Baking a Cake

Consider the following recipe for chocolate cake.

> Note: This is not a real recipe! Don't expect it to actually produce cake. :-)

1. Warm up oven to 325 degrees for 5 minutes.
2. Put three eggs in a mixing bowl.
3. Melt a 1/4 pound of chocolate on a very low flame for 2 minutes.
4. Add 2 cups of flour in the mixing bowl and mix vigorously.
5. Add 1/3 stick of melted butter to the mixing bowl.
6. Pour melted chocolate into bowl and mix.
7. Pour contents of bowl into a cake pan.
8. Put cake pan in the oven for 5 minutes.

First we'll take a look at how we could create this cake  **synchronously**. 

### We Do
*Create the file cake_sync.js*

```javascript
'use strict';

// Basic sleep function based on milliseconds.
// ONLY FOR DEMONSTRATION!!!!
var sleep = function (ms) {
  var unixtimeMS = new Date().getTime();
  while(new Date().getTime() < unixtimeMS + ms){
    // do nothing
  }
};

// SIMULATE a synchronous operation
var syncOperation = function(message, seconds){
  console.log('\nStart:', message);
  // 1 second = 1000 milliseconds
  sleep(seconds * 1000);
  console.log('End:', message);
};

// Times shortened to prevent excessive snoring during lesson.
// 1 minute = 1 second

syncOperation('Warm up oven to 325 degrees for 5 minutes.', 5);
syncOperation('Put three eggs in a mixing bowl.', 0.5);
syncOperation('Melt a 1/4 pound of chocolate on a very low flame for 2 minutes.', 2);
syncOperation('Add 2 cups of flour in the mixing bowl and mix vigorously.', 1);
syncOperation('Pour melted chocolate into bowl and mix.', 0.5);
syncOperation('Pour contents of bowl into a cake pan.', 0.5);
syncOperation('Put cake pan in the oven for 5 minutes.', 5);

```

Run ``time node cake_sync.js``

Notice how this takes about 15 seconds. Yes, we are running each operation above **synchronously**.


Now we'll take a look at how we could create this cake  **asynchronously**. 

*Create the file cake_async.js*

```javascript
'use strict';
//  |----A-----|
//    |-----B-----------|
//        |-------C------|

// SIMULATE an asynchronous operation
var asyncOperation = function(message, seconds){
  console.log('Start:', message);

  // Do operation and let me know when it's done, eh.
  setTimeout(function(){
    console.log('End:', message);
  }, seconds * 1000);
};

// Times shortened to prevent excessive snoring during lesson.
// 1 minute = 1 second

asyncOperation('Warm up oven to 325 degrees for 5 minutes.', 5);
asyncOperation('Put three eggs in a mixing bowl.', 0.5);
asyncOperation('Melt a 1/4 pound of chocolate on a very low flame for 2 minutes.', 2);
asyncOperation('Add 2 cups of flour in the mixing bowl and mix vigorously.', 1);
asyncOperation('Pour melted chocolate into bowl and mix.', 0.5);
asyncOperation('Pour contents of bowl into a cake pan.', 0.5);
asyncOperation('Put cake pan in the oven for 5 minutes.', 5);

```

Run ``time node cake_async.js``

Notice how this takes about 5 seconds. Yes, we are running each operation above **asynchronously**.

**In the world we often work in an asychronous manner to improve efficiency.**

### You Do

Using the above defined sleep and syncOperation functions simulate how a short order cook will prepare orders in a **sync** manner. *Create a JS file, cook_sync.js*

Using the above asyncOperation function simulate how the short order cook will prepare orders in a **async** manner.

**Create a JS file, short_orders.js**

The order of each food order will be:

* hotdog
* sandwich
* hamburger
* sandwich
* hotdog

How long does it take to complete all these orders? 

Why the difference in time?

Which type of operations simulates the real world?


## Blocking vs Non-Blocking Operations.


As we saw above **synchronous** operations **block** the execution of other operations until **the are done**.

**Async** operations are **non blocking**. They **allow other operations to proceed while they are executing.**


Some operations we perform in our running software take **orders of magnitude** longer than others. For example, the following operations take much, much longer than executing a line of **code**.

* Accessing a file on a disk.
* Opening a socket to communicate with another computer.
* **Sending a HTTP Request and waiting for a HTTP Response from a Web Server.**


And some operations depend on a human to perform and action. **And we just can't wait until the human user responds!**

* Waiting for a human to enter a response on the command line.
* **Waiting for a user to click a link on an HTML page.**

So, we don't want to **block** the execution of **code** while we wait for a disk to find the location of a file's data on a disk.

We don't want to **block** the execution of **code** while we **wait for a HTTP Response from a Web Server.**

And we definitely don't want to **block** the execution of **code** while we **wait for the user to click on a link or button!**


We use **Asynchronous operations so we won't block other operations.**  But, it can be very difficult for human beings to reason about complex async operations.

We use **Synchronous operations if we don't mind blocking**. It's a lot easier to reason about synchronous code and operations.


### You Do:
Think about responding to user actions on a web page. 

Create a simple HTML page that executes JS. Create a **non-blocking operation** that will ``alert('Did it!')`` when you click on a some text.

You can use JQuery or just the browser's native functions to handle the click event. Easiest to use the Browser's native functions, [Browser getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) and [Browser addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

### You Do: 

This video explains the event loop as it's implemented in the browser. Takes about 20 minutes. 

> The speaker makes reference to **AJAX**. This is when JS code generates a HTTP Request. We'll see more about this later*

Watch ["Help, I'm stuck in an event loop."](https://vimeo.com/96425312)

