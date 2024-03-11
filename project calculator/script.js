const inputValue = document.getElementById("userinput");

// Operations other than numbers
document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const operation = e.target.innerText;
        
        if(operation === "="){
            // Evaluate the expression
            try {
                // Calculate and display the result
                inputValue.innerText = eval(inputValue.innerText).toString();
            } catch (error) {
                inputValue.innerText = "Error";
            }
        } else if(operation === "AC"){
            // Reset the calculator display
            inputValue.innerText = "0";
        } else if(operation === "DEL"){
            // Delete the last character
            if(inputValue.innerText.length > 1) {
                inputValue.innerText = inputValue.innerText.slice(0, -1);
            } else {
                inputValue.innerText = "0";
            }
        } else {
            // Append the operation to the display
            if(inputValue.innerText !== "0") {
                inputValue.innerText += operation;
            }
        }
    });
});

// Number and dot buttons
document.querySelectorAll(".numbers").forEach(function(item) {
    item.addEventListener("click", function (e) {
        if(inputValue.innerText === "0"){
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerText.trim();
    });
});
