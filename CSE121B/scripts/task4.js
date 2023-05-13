/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myLife = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
_name: 'Mateus Schiavi',
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
_photo: 'Me.jpg',
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

_foods: ["Ramen","Brazilian Food","Spicy Beans","Creamy Chocolate"],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
_hobbies: ["Genshin Impact","Programming","Reading", "Writing","Listen to Music"]
};
// Step 6: Add another property named placesLived with a value of an empty array
_placesLived: []
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myLife._placesLived = [
    {
        place:"Pernambuco, BR",
        length: 4
    },
    {
        place:"Suzano, BR",
        length: 300
    }
    //the length is in months
];
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").querySelector = myLife._name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
_photo = document.querySelector("#photo")
_photo.setAttribute('src',`./images/${myLife._photo}`);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photo.setAttribute('alt', `Photo of ${myLife._name}`);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
myLife._foods.forEach( _food => {
    let li = document.createElement('li');
    li.textContent = _food;
    document.querySelector('#favorite-foods').appendChild(li);
});
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
myLife._hobbies.forEach(_hobby => {
let li = document.createElement('li');
li.textContent = _hobby;
document.querySelector('#hobbies').appendChild(li);
});

myLife._placesLived.forEach(_lived => {
let tr = document.createElement('tr');
let tdPlace = document.createElement('td');
let tdLength = document.createElement('td');

tdPlace.textContent = live.place;
tdLength.textContent = _lived.length;

tr.appendChild(tdPlace);
tr.appendChild(tdLength);

document.querySelector('table').appendChild(tr);
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
