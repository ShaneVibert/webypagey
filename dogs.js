// ------------------------------
// Object Literal Example
// ------------------------------
let myDog = {
    name: "Astro",
    show: "The Jetsons",
    breed: "Great Dane",
    role: "Family Dog",
    mySound: "Hello, my name is Astro, when I bark I am not scary.",
    
    // Method to display dog description
    describe: function() {
        return `My name is ${this.name}. I am from the show "${this.show}". 
        I am a ${this.breed}, and my role was the ${this.role}. 
        My sound: "${this.mySound}"`;
    }
};

// Display object literal info
document.getElementById("output").innerHTML += `<p>${myDog.describe()}</p>`;

// ------------------------------
// Constructor Function Example
// ------------------------------
function Dog(name, show, breed, role, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.role = role;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method stored in object
    this.myGreeting = function() {
        return `Hello! My name is ${this.name}. 
        I starred in "${this.show}" as a ${this.breed}. 
        My role was the ${this.role}. 
        I say: "${this.mySound}" 
        Can I talk? ${this.canTalk}`;
    };
}

// Create an object using the constructor
let myDogConst = new Dog(
    "Astro",
    "The Jetsons",
    "Great Dane",
    "Family Dog",
    "Hello, my name is Astro, when I bark I am not scary.",
    true
);

// Call the object’s method and display output
document.getElementById("output").innerHTML += `<p>${myDogConst.myGreeting()}</p>`;
