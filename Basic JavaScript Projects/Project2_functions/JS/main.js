// This function runs when the button on the page is clicked
function addPoints() {
    // Start a variable with a value of 10
    var score = 10;

    // Use the += operator to add 5 to score (same as score = score + 5)
    score += 5;

    // Use += again, this time to build a message string piece by piece
    var message = "Your starting score was 10. ";
    message += "After adding 5 points, your score is ";
    message += score + ".";

    // Find the paragraph with the id "Score_Display" and show the message in it
    document.getElementById("Score_Display").innerHTML = message;
}