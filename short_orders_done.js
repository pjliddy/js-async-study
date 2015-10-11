var burger = function(){
  console.log("Prepared Burger");
};

var hotdog = function(){
  console.log("Prepared HotDog");
};

var sandwich = function(){
  console.log("Prepared Sandwich");
};

setTimeout(hotdog, 3 * 1000);
setTimeout(sandwich, 1 * 1000);
setTimeout(burger, 5 * 1000);
setTimeout(sandwich, 1 * 1000);
setTimeout(hotdog, 3 * 1000);
