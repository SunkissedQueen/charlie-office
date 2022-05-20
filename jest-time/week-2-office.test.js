// divisibleBy
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// a describe method that lists the name of the function OR naming of the particular test.
describe("divisibleBy", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs 10 is evenly divisible by 5", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
    expect(divisibleBy(11, 5)).toEqual("11 is not evenly divisible by 5")
  })
})

// Good failure
// FAIL  charlie-office/jest-time/week-2-office.test.js
// divisibleBy

// Write the function that will make the test pass.
// ******Pseudocode******
// declare a function named divisibleBy
// input - two numbers using parameters named number1 and number2
// expected output -  return a string that contains that number in the statement
// use string interpolation for statement
// use conditional statements with modulo operator to determine if number1 is divisible by number2

// ******Function*******
// This function will pass; however, it does not address the being dvisible part of the question.
// const divisibleBy = (number1, number2) => {
//   return `${number1} is evenly divisible by ${number2}`
// }

const divisibleBy = (number1, number2) => {
  if(number1 % number2 === 0) {
    return `${number1} is evenly divisible by ${number2}`
  } else {
    return `${number1} is not evenly divisible by ${number2}`
  }  
}


// fizzbuzz
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.