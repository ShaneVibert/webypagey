// Constructor function for Dog objects
function Dog(name, breed, color, canTalk) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.canTalk = canTalk;

  // Method to display a greeting and whether the dog can talk
  this.myGreeting = function () {
    if (this.canTalk) {
      return `Hi, I'm ${this.name}. I am a ${this.color} ${this.breed}. I can talk!`;
    } else {
      return `Hi, I'm ${this.name}. I am a ${this.color} ${this.breed}. I cannot talk.`;
    }
  };
}

// Create dog objects (using fictional dogs from Wikipedia)
let brian = new Dog("Brian", "Labrador Retriever", "white", true);
let scooby = new Dog("Scooby-Doo", "Great Dane", "brown", false);

// Store them in an array for easy lookup
let dogs = [brian, scooby];

// Display all dogs and their properties
let output = document.getElementById("output");
dogs.forEach(dog => {
  output.innerHTML += `<h3>${dog.name}</h3>`;
  for (let prop in dog) {
    if (typeof dog[prop] !== "function") {  // skip methods
      output.innerHTML += `<p><strong>${prop}:</strong> ${dog[prop]}</p>`;
    }
  }
  output.innerHTML += `<p>${dog.myGreeting()}</p><hr>`;
});

// Prompt the user to select a dog
let selectedName = prompt("Type the name of a dog (Brian or Scooby-Doo):");
let selectedDog = dogs.find(dog => dog.name.toLowerCase() === selectedName.toLowerCase());

// Display result or error
if (selectedDog) {
  output.innerHTML += `<h2>You selected ${selectedDog.name}!</h2>`;
  output.innerHTML += `<p>${selectedDog.myGreeting()}</p>`;
} else {
  output.innerHTML += `<p style="color:red;">Error: The dog "${selectedName}" does not exist.</p>`;
}
