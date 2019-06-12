// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayWords() {
  let word = "Kazoo";
  function logWord() {
    console.log(word);
  }
  return logWord();
}
sayWords();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    return ++count;
  }
}
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// ==== NOT WORKING YET ====
const counterFactory = () => {
  this.count = 0
  this.increment = function () {
    count++
    // console.log(count);
    return count;
  }
  
  // decrement: function() {
  //   return --count;
  // }
  this.status =  function() {
    console.log(count);
  }
    
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return this;
};
const newCounterFactory = counterFactory();
newCounterFactory.increment;
console.log(newCounterFactory.count);
// counterFactory.status;

