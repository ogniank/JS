// ===== 1. GLOBAL AND LOCAL VARIABLES =====

// GLOBAL variable: declared outside any function, so every function can use it
var X = 10;

// This function uses the GLOBAL variable X
function Add_numbers_1() {
    document.getElementById("Global").innerHTML = "Global X + 20 = " + (X + 20); // 30
}

// This function creates a LOCAL variable Y that only exists inside this function
function Add_numbers_2() {
    var Y = 5; // local variable
    document.getElementById("Local").innerHTML = "Local Y + 100 = " + (Y + 100); // 105
}

// ===== 3. INTENTIONAL ERROR + console.log() DEBUGGING =====
function Add_numbers_3() {
    console.log("Global X is: " + X); // works: prints 10 in the console
    console.log("Local Y is: " + Y);  // ERROR: Y is not defined outside Add_numbers_2()
}

// ===== 2. FUNCTION WITH AN IF STATEMENT =====
function get_Date() {
    // new Date().getHours() returns the current hour from 0 to 23
    // If it is before 6 PM (hour 18), show a greeting
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// ===== 4. TIME_FUNCTION =====
function Time_function() {
    // Get the current hour (0-23)
    var Time = new Date().getHours();
    var Reply; // will hold the message to display

    // if / else if / else picks a message based on the time of day
    if (Time < 12 && Time >= 0) {
        Reply = "It is morning time!";      // midnight to 11:59 AM
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";         // noon to 5:59 PM
    } else {
        Reply = "It is evening time.";      // 6 PM to 11:59 PM
    }

    // Display the message in the paragraph with the id "Time_of_day"
    document.getElementById("Time_of_day").innerHTML = Reply;
}