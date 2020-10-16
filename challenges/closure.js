// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// Nested function can access the variable internal because a function can go outside of itself to get a variable if it is not located in the function.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let numToSummation = 4;

function sumation(numToSummation){
  let counter = 0;

  for (let i = 1; i <= numToSummation; i++) {
    counter += i;
  }  

  return counter;
}

// console.log(`Summation: ${sumation(4)}`)