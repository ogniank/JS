// ===== 1. WHILE LOOP =====
// A while loop keeps repeating as long as its condition is true
function Call_Loop() {
    var Digit = "";   // will hold the text we build up
    var X = 1;        // our counter starts at 1

    // Keep looping while X is less than 11 (so it counts 1 to 10)
    while (X < 11) {
        Digit += "<br>" + X;  // add the current number on a new line
        X++;                  // add 1 to X, otherwise the loop would never end
    }

    // Display all the numbers in the paragraph with the id "Loop"
    document.getElementById("Loop").innerHTML = Digit;
}

// ===== 2. FOR LOOP =====
// A for loop repeats a set number of times: for (start; condition; step)
function for_Loop() {
    // An array of instruments
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";

    // Start at position 0, keep going while Y is less than the array's length,
    // and add 1 to Y after each loop
    for (var Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"; // add each instrument on its own line
    }

    // Display the list in the paragraph with the id "List_of_Instruments"
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// ===== 3. ARRAY =====
// An array stores several values in one variable; each value has a position (index) starting at 0
function array_Function() {
    var Cat_Picture = [];          // create an empty array
    Cat_Picture[0] = "sleeping";   // position 0
    Cat_Picture[1] = "playing";    // position 1
    Cat_Picture[2] = "eating";     // position 2
    Cat_Picture[3] = "purring";    // position 3

    // Use the value stored at position 2 in a sentence
    document.getElementById("Array").innerHTML =
        "In this picture, the cat is " + Cat_Picture[2] + ".";
}

// ===== 4. OBJECT CREATED WITH "let" =====
// "let" declares a variable that only exists inside the block { } where it is created
function let_Object() {
    // Create an object with key-value pairs using the let keyword
    let Car = {
        make: "Dodge",
        model: "Viper",
        year: 2021,
        color: "red",
        // A method: a function stored inside the object.
        // "this" refers to the Car object itself.
        description: function () {
            return "The car is a " + this.year + " " + this.color + " " +
                this.make + " " + this.model + ".";
        }
    };

    // Call the object's method and display the result
    document.getElementById("Car_Object").innerHTML = Car.description();
}