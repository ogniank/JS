// ADDITION: uses the + operator to add two numbers
function addition() {
    var result = 6 + 4; // 6 plus 4 equals 10
    document.getElementById("Add").innerHTML = "6 + 4 = " + result;
}

// SUBTRACTION: uses the - operator to subtract one number from another
function subtraction() {
    var result = 10 - 3; // 10 minus 3 equals 7
    document.getElementById("Subtract").innerHTML = "10 - 3 = " + result;
}

// MULTIPLICATION: uses the * operator to multiply two numbers
function multiplication() {
    var result = 5 * 7; // 5 times 7 equals 35
    document.getElementById("Multiply").innerHTML = "5 * 7 = " + result;
}

// MODULUS: uses the % operator to find the remainder after division
function modulus() {
    var result = 25 % 6; // 25 divided by 6 is 4 with a remainder of 1
    document.getElementById("Modulus").innerHTML = "The remainder of 25 / 6 is " + result;
}

// INCREMENT: uses the ++ operator to add 1 to a variable
function increment() {
    var x = 5; // start with 5
    x++;       // add 1, so x is now 6
    document.getElementById("Increment").innerHTML = "5 incremented by 1 is " + x;
}

// DECREMENT: uses the -- operator to subtract 1 from a variable
function decrement() {
    var y = 5; // start with 5
    y--;       // subtract 1, so y is now 4
    document.getElementById("Decrement").innerHTML = "5 decremented by 1 is " + y;
}

// RANDOM: uses Math.random() to pick a random whole number from 1 to 100
function randomNumber() {
    // Math.random() gives a decimal between 0 and 1 (never 1 itself).
    // Multiplying by 100 and using Math.floor() turns it into 0-99, then + 1 makes it 1-100.
    var random = Math.floor(Math.random() * 100) + 1;
    document.getElementById("Random").innerHTML = "Your random number is " + random;
}