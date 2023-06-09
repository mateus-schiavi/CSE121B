/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const _Name = "Mateus 'Matt' Schiavi";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = _Name;

// Step 3: declare and instantiate a variable to hold the current year
const _currentyear = 2023;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = _currentyear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const _MyPic = "images/Me.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", _MyPic);

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const _myFoods = ["Ramen", "Brazilian Food", "Creamy Chocolate", "Chicken with pepper"]
// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = _myFoods;
// Step 3: declare and instantiate a variable to hold another favorite food
const  _Food = "Spicy beans";
// Step 4: add the variable holding another favorite food to the favorite food array
_myFoods.push(_Food);
// Step 5: repeat Step 2
document.querySelector("#food").textContent = _myFoods;
// Step 6: remove the first element in the favorite foods array
_myFoods.slice(1);
// Step 7: repeat Step 2
document.querySelector("#food").textContent = _myFoods;
// Step 8: remove the last element in the favorite foods array
_myFoods.pop();
// Step 7: repeat Step 2
document.querySelector("#food").textContent = _myFoods;