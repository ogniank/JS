// ===================== COUNTDOWN TIMER =====================

// countdown() runs when the "Click here" button is clicked
function countdown() {
    // Get the number of seconds the user typed into the input box
    var seconds = document.getElementById("seconds").value;

    // tick() is a nested function that runs once every second
    function tick() {
        seconds = seconds - 1;                                // take away one second
        timer.innerHTML = seconds;                            // show the seconds left in <p id="timer">
        var time = setTimeout(tick, 1000);                    // run tick() again in 1000 ms (1 second)

        // When the countdown goes past zero, stop the timer
        if (seconds == -1) {
            alert("Time's up!");                              // pop-up message
            clearTimeout(time);                               // stop calling tick()
            timer.innerHTML = "";                             // clear the number from the page
        }
    }

    tick(); // start the countdown
}

// ===================== SLIDESHOW =====================

// slideIndex keeps track of which slide is showing (starts at slide 1)
let slideIndex = 1;
showSlides(slideIndex); // show the first slide when the page loads

// plusSlides() runs when an arrow is clicked: n is 1 (next) or -1 (previous)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// currentSlide() runs when a dot is clicked: n is the slide number to jump to
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// showSlides() hides every slide, then shows only the one at slideIndex
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // all the slides
    let dots = document.getElementsByClassName("dot");        // all the dots

    // If we go past the last slide, wrap around to the first
    if (n > slides.length) { slideIndex = 1; }
    // If we go before the first slide, wrap around to the last
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the "active" highlight from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and highlight its dot
    // (slideIndex - 1 because array positions start at 0)
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}