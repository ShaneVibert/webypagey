

// User name and variable
let Fname = prompt("Please enter your first name:");

// welcome message
alert("Welcome, " + Fname + "!");

// constant of pi
const piValue = 3.1415926;

// ask user ffor favorite #
let myFavNum = prompt("Enter your favorite number:");

// convert to a number from string
myFavNum = Number(myFavNum);

// area of circle
let myArea = piValue * (myFavNum ** 2);

// display
let message = `
  Hello ${Fname},<br>
  You entered <b>${myFavNum}</b> as your favorite number.<br>
  Pi is stored as <b>${piValue}</b>.<br>
  If your favorite number was the radius of a circle,<br>
  the circle’s area would be <b>${myArea}</b>.
`;


document.getElementById("output").innerHTML = message;
