
function writeMessage(msg) {
  document.getElementById("output").innerHTML += msg + "<br>";
}

// loop 0–10 
writeMessage("<strong>For Loop (Odd/Even Check)</strong>");
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    writeMessage("Count " + i + " is even");
  } else {
    writeMessage("Count " + i + " is odd");
  }
}

// Do While loop 
let myNum;
do {
  myNum = parseInt(prompt("Enter a number between 5 and 20:"));
} while (isNaN(myNum) || myNum < 5 || myNum > 20);

writeMessage("<br><strong>Do While Loop (1 to " + myNum + ")</strong>");
let counter = 1;
do {
  writeMessage("Counter: " + counter);
  counter++;
} while (counter <= myNum);

//  Array
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

writeMessage("<br><strong>Subjects with forEach()</strong>");
subjects.forEach(function(subject, index) {
  writeMessage((index + 1) + ". " + subject);
});

// values separated by commas
writeMessage("<br><strong>Subjects in one line:</strong><br>" + subjects.join(", "));
