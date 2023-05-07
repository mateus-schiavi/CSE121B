/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
    // Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2;
}
// Step 3: Step 3: Using function declaration, define another function named addnumericalSet that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addnumericalSet() {
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);
    let result = add(addend1, addend2);
    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector('#sum').value = result;
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addnumericalSet that calls the addnumericalSet function
document.querySelector('#addnumericalSet').addEventListener('click', addnumericalSet);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractnumericalSet and HTML form controls with IDs of minuend, subtrahend, difference and subtractnumericalSet
const subtract = function (x, y) {
    return x - y;
}

const subtractnumericalSet = function () {
    let minuend = parseInt(document.getElementById('minuend').value);
    let subtrahend = parseInt(document.getElementById('subtrahend').value);
    let finalNumber = subtract(minuend, subtrahend);
    document.querySelector('#difference').value = finalNumber;
}
document.querySelector('#subtractnumericalSet').addEventListener('click', subtractnumericalSet);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplynumericalSet and HTML form controls with IDs of factor1, factor2, product and multiplynumericalSet
let multiply = (x1, y1) => x1 * y1;

let multiplynumericalSet = () => {
    let factor1 = parseInt(document.querySelector('#factor1').value);
    let factor2 = parseInt(document.querySelector('#factor2').value);
    let finalMult = multiply(factor1, factor2);
    document.querySelector('#product').value = finalMult;
}
document.querySelector('#multiplynumericalSet').addEventListener('click', multiplynumericalSet);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and dividenumericalSet and HTML form controls with IDs of dividend, divisor, quotient and dividenumericalSet
let divide = (x1, y1) => x1 / y1;

let dividenumericalSet = () => {
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let finalDiv = divide(dividend, divisor);
    document.querySelector('#quotient').value = finalDiv;
}
document.querySelector('#dividenumericalSet').addEventListener('click', dividenumericalSet);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let currentDate = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numericalSet = Array.from({ length: 25 }, (_, i) => i + 1);

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').innerHTML = numericalSet;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector('#odds').innerHTML = numericalSet.filter(number => {
    return number % 2 !== 0;
});

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens').innerHTML = numericalSet.filter(number => {
    return number % 2 == 0;
});

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector('#sumOfArray').innerHTML = numericalSet.reduce((fx, gx) => fx + gx, 0);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector('#multiplied').innerHTML = numericalSet.map(k => k * 2)

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector('#sumOfMultiplied').innerHTML = numericalSet.map(j => j * 2).reduce((i, j) => i + j, 0)