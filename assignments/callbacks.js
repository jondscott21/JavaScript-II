// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  
//Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, function(itemLength) {
  console.log(itemLength)
  return (itemLength)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
last(items, function(lastItem) {
  console.log(lastItem);
  return (lastItem);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumNums( 5, 6, function(sumIt){
  console.log(sumIt);
  return (sumIt);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums( 5, 6, function(multiplyIt){
  console.log(multiplyIt);
  return (multiplyIt);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(let i = 0; i < list.length; i++) {
    if(item === list[i]) {
      return cb(true);
    }
  }
  return cb(false);
}
console.log(contains('Pencil', items, function(maybe) {
  return (maybe);
}))

/* STRETCH PROBLEM */
let jobs = ["Fashion Designer", "Web Developer", "Web Designer", "Fashion Designer", "Web Developer"];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArr = [];
  newArr = array.filter(function(item, index) {
    return array.indexOf(item) >= index;
  });
  return cb(newArr);
}
removeDuplicates(jobs, function(removal) {
  console.log(removal);
  return (removal);
});
