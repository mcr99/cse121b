/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {
    return number1 + number2;
}

function addNumbers (add1, add2){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value); 
    document.querySelector("#sum").value = add(addNumber1, addNumber2);   
} 
document.querySelector("#addNumbers").addEventListener("click", addNumbers);



/* Function Expression - Subtract Numbers */

function subtract (sNumber1, sNumber2) {
    return sNumber1 - sNumber2;
}

function subtractNumbers (subtract1, subtract2){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);



/* Arrow Function - Multiply Numbers */
const multiply = (mult1, mult2) => mult1 * mult2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const  divide = (div1, div2) => div1 / div2;

const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */

function getTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    if (document.getElementById("member").checked){
        subtotal = subtotal - subtotal * 0.2;
    }
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById("getTotal").addEventListener("click", getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const nArray = document.getElementById("array");
nArray.innerHTML = numbersArray;


/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(num => num % 2 !== 0);
const oNumbers = document.getElementById("odds");
oNumbers.innerHTML = oddNumbers;


/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
const sumOfOrg = numbersArray.reduce((sum, number) => sum + number);
const soo = document.getElementById("sumOfArray");
soo.innerHTML = sumOfOrg;

/* Output Multiplied by 2 Array */
const multBy2Array = numbersArray.map(number => number * 2);
const mb2a = document.getElementById("multiplied");
mb2a.innerHTML = multBy2Array;

/* Output Sum of Multiplied by 2 Array */

const multArray = numbersArray.map(number => number * 2);
const sumOfMultArray = multArray.reduce((sum, number) => sum + number);
const somb2a = document.getElementById("sumOfMultiplied");
somb2a.innerHTML = sumOfMultArray;
