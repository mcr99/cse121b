/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Marvin Canastuj" ;
const currentYear = "2024";
const profilePicture = "images/marvin.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `This is ${fullName}`);


/* Step 5 - Array */
let favoriteFood = ["Pizza", "Fries", "Salad", "Roast Beef", "Pupusas"  ]
foodElement.innerHTML = favoriteFood;

let newFood = "Rice";
favoriteFood.push(newFood);
// foodElement.innerHTML= favoriteFood; this is to have it replace
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift();
console.log(favoriteFood);
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();
console.log(favoriteFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
























