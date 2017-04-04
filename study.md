# JavaScript Async Study

Use your favorite search engine and the provided readings to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. Please do not respond with direct quotes from source
material. Instead, digest what you've read and repeat it in your own voice.

These studies focus on the differences between Asynchronous Code, and
Synchronous Code. For the most part, you can think of the differences as the
following. However, the readings will go into much more detail on the
differences and patterns of each.

Synchronous Code - operations the occur sequentially: ask db for data; wait; db gives data; do something with data.

Asynchronous - operations that may start in a certain sequence and may end in any permutation of that sequence while unrelated stuff happens in between.

## Required Readings

-   [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
-   [Understanding Asynchronous JavaScript](https://www.youtube.com/watch?v=vMfg0xGjcOI)
-   [The Restaurant](https://www.codeschool.com/blog/2014/10/30/understanding-node-js/)
-   [Javes!](https://www.discovermeteor.com/blog/understanding-sync-async-javascript-node/) (until the section on fibers)

## The Event Loop

In your own words, describe the event loop and how it works.

```md
The event loop is the mechanism by which JavaScript manages runtime event calls through the call stack and callback queue. The event loop waits until the call stack is clear, then moves callbacks from the task queue to the stack for execution.

(SOURCE: Videos)
```

## Synchronicity and Asynchronicity

In your own words, describe the difference between sync and async.

```md
Events that are aynchronous require each event to complete its actions before the next event can begin. Asynchronous events are able to use callbacks functions to execute when its actions are complete and free up the event queue in the meantime.

(SOURCE: discovermeteor.com blog post)
```

## Async Advantages and Disadvantages

What are some advantages and disadvantages of async?

```md
One of the big advantages of async is the ability to "unblock" the event loop and free up the application to respond to its environment. This allows for updating the user interface, sending and receiving messages, monitoring network activity, etc.

A big disadvantage of asynch is the possibility for a great deal of complexity with callbacks. Additionally, there is no guarantee that the callback event will ever be called, so the application amy not end up behaving in a way that the original function assumed.

(SOURCE: Videos)
```
