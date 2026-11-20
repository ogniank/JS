// This function runs when the "Click me!" paragraph is clicked
function my_Dictionary() {
    // Create a dictionary (a JavaScript object) made of key-value pairs.
    // Each key (left side) is a unique name; each value (right side) is its data.
    var Car = {
        Make: "Toyota",
        Model: "Corolla",
        Color: "Blue",
        Year: 2020,       // numbers don't need quotation marks
        Sound: "Vroom!"
    };

    // The delete statement removes the "Sound" key (and its value) from the dictionary.
    // Because this happens BEFORE we display it, Car.Sound no longer exists.
    delete Car.Sound;

    // Output key-value pairs into the paragraph with the id "Dictionary".
    // "Model" still exists, so it shows "Corolla".
    // "Sound" was deleted, so it shows "undefined".
    document.getElementById("Dictionary").innerHTML =
        "Model: " + Car.Model + "<br>" +
        "Sound: " + Car.Sound;
}