const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let array1 = [];
array1 = food.split(",").sort();
console.log(array1);

let array2 = [];
array2 = equipment.split(",").sort();
console.log(array2);

let array3 = [];
array3 = pets.split(",").sort();
console.log(array3);

let array4 = [];
array4 = sleepAids.split(",").sort();
console.log(array4);
//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold = (array1 + "," + array2 + ","  + array3 + ","  + array4).split().sort()
console.log(cargoHold)

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
question = Number(input.question("What cabinet do you want to choose: "))


//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (question === 0) {
  console.log(`Inventory in Cabinet 0: ${array1}`)
} else if (question === 1) {
  console.log(`Inventory in Cabinet 1: ${array2}`)
} else if (question === 2) {
  console.log(`Inventory in Cabinet 2: ${array3}`)
} else if (question === 3) {
  console.log(`Inventory in Cabinet 3: ${array4}`)
} else {
  console.log("Try again")
}


//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
