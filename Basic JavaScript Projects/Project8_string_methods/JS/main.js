// ===== concat() =====
// concat() joins two or more strings together into one string
function string_Concat() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    // Join all four parts, starting from part1
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// ===== slice() =====
// slice(start, end) pulls out part of a string.
// It starts at position "start" and stops just BEFORE position "end".
// Positions start counting at 0.
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    // Characters 27 up to (not including) 33 spell "Johnny"
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

// ===== toString() =====
// toString() converts a number (or other value) into a string
function string_Method() {
    var X = 182;
    // After toString(), X becomes the text "182"
    var X_as_string = X.toString();
    document.getElementById("Numbers_to_string").innerHTML =
        X_as_string + " is now a " + typeof X_as_string + ".";
}

// ===== toPrecision() =====
// toPrecision(n) formats a number so it has n significant digits in total
function precision_Method() {
    var X = 12938.3012987376112;
    // Keep 10 digits in total, so the result is 12938.30130
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}