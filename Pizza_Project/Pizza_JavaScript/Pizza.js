// getReceipt() runs when the "Place Order" button is clicked.
// It works out the pizza size and its price, then passes the results on.
function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    // runningTotal holds the price as it builds up across the functions
    var runningTotal = 0;
    // sizeTotal holds the price of the selected size only
    var sizeTotal = 0;
    // Get every size radio button (they all share the class "size")
    var sizeArray = document.getElementsByClassName("size");
    // Loop through the sizes to find the one that is checked
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            // Add the chosen size to the receipt on its own line
            text1 = text1+selectedSize+"<br>";
        }
    }
    // Set the price based on which size was chosen
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    // The running total starts with the size price
    runningTotal = sizeTotal;
    // console.log() lines help with debugging (press F12 > Console to see them)
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getVeggie(runningTotal,text1);
};

// getVeggie() adds the chosen vegetables to the receipt and counts them.
// The price is worked out in getTopping(), because vegetables and meats
// are both toppings and share the "first topping is free" rule.
function getVeggie(runningTotal,text1) {
    // This array will collect every vegetable that is checked
    var selectedVeggie = [];
    // Get every vegetable checkbox (they all share the class "veggies")
    var veggieArray = document.getElementsByClassName("veggies");
    // Loop through the vegetables and keep the checked ones
    for (var v = 0; v < veggieArray.length; v++) {
        if (veggieArray[v].checked) {
            selectedVeggie.push(veggieArray[v].value);
            console.log("selected veggie item: ("+veggieArray[v].value+")");
            // Add each chosen vegetable to the receipt on its own line
            text1 = text1+veggieArray[v].value+"<br>";
        }
    }
    // Count how many vegetables were chosen
    var veggieCount = selectedVeggie.length;
    console.log("total selected veggie items: "+veggieCount);
    // Pass the total, the receipt text and the vegetable count on to the meats
    getTopping(runningTotal,text1,veggieCount);
};

// getTopping() adds the chosen meats, prices all toppings and shows the receipt.
function getTopping(runningTotal,text1,veggieCount) {
    // toppingTotal holds the extra cost for toppings
    var toppingTotal = 0;
    // This array will collect every meat that is checked
    var selectedTopping = [];
    // Get every meat checkbox (they all share the class "toppings")
    var toppingArray = document.getElementsByClassName("toppings");
    // Loop through the meats and keep the checked ones
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            // Add each chosen meat to the receipt on its own line
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    // Total toppings = vegetables + meats
    var toppingCount = selectedTopping.length + veggieCount;
    // Each topping costs $1, but the first one is free
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    // Add the topping cost to the size price
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    // Show the full receipt and the total price on the page
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";
};
