// ===== 1. TERNARY OPERATION using input from the browser =====
function Vote_Function() {
    // Get the number the user typed into the input box with the id "Age"
    var Age = document.getElementById("Age").value;

    // Ternary operator: condition ? value_if_true : value_if_false
    // If Age is 18 or more, Can_vote = "You are old enough", otherwise "You are too young"
    var Can_vote = (Age >= 18) ? "You are old enough" : "You are too young";

    // Display the result plus " to vote." in the paragraph with the id "Vote"
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

// ===== 2. CONSTRUCTOR FUNCTION using the "this" keyword =====
// A constructor is a blueprint for creating objects.
// "this" refers to the new object being created.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// The "new" keyword creates new objects from the Vehicle blueprint
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// ===== 3. FUNCTION to display the constructor results in an HTML element =====
function myFunction() {
    // Build a sentence using the properties of the Erik object
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year + ".";
}

// ===== 4. NESTED FUNCTION =====
// count_Function() contains another function, Plus_one(), inside it
function count_Function() {
    // Display the result of the outer function in the paragraph with the id "Nested_Function"
    document.getElementById("Nested_Function").innerHTML = Count();

    function Count() {
        var Starting_point = 9;   // the starting number

        // Nested (inner) function: it can use Starting_point from the outer function
        function Plus_one() {
            Starting_point += 1;  // add 1 to the starting point
        }

        Plus_one();               // call the inner function, so 9 becomes 10
        return Starting_point;    // send back the new value (10)
    }
}