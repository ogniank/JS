// ===== 1. typeof operator =====
// Create a variable and use typeof to find out its data type
var myName = "Alex";
document.write("The data type of myName is: " + typeof myName + "<br>"); // string

var myAge = 25;
document.write("The data type of myAge is: " + typeof myAge + "<br><br>"); // number

// ===== 2. Type coercion: combining a string and a number =====
// When a string and a number are added with +, JavaScript turns the number
// into a string and joins them together (this is called type coercion)
document.write("\"10\" + 5 = " + ("10" + 5) + "<br><br>"); // "105", not 15

// ===== 3. Comparison operators =====
// == checks if values are equal, converting types if needed
document.write("10 == \"10\" is " + (10 == "10") + "<br>");   // true

// === checks if values AND data types are both equal (no conversion)
document.write("10 === \"10\" is " + (10 === "10") + "<br>"); // false (number vs string)

// > checks if the left value is greater than the right value
document.write("10 > 5 is " + (10 > 5) + "<br>");             // true

// < checks if the left value is less than the right value
document.write("10 < 5 is " + (10 < 5) + "<br><br>");         // false

// ===== Logical operators =====
// && (AND) is true only if BOTH sides are true
document.write("(5 > 2 && 10 > 4) is " + (5 > 2 && 10 > 4) + "<br>"); // true

// || (OR) is true if AT LEAST ONE side is true
document.write("(5 > 10 || 10 > 4) is " + (5 > 10 || 10 > 4) + "<br>"); // true

// ! (NOT) flips true to false and false to true
document.write("!(5 > 10) is " + !(5 > 10) + "<br>"); // true