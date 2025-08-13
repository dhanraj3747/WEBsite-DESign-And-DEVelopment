// function validate() {
//     var fn = document.getElementById("fname").value;
//     var msgElement = document.getElementById("msg1"); // Get the message element once for efficiency

//     // 1. Clear previous messages at the start of validation
//     msgElement.innerText = "";

//     // 2. Check for empty string
//     if (fn === "") { // Using strict equality === is generally good practice
//         msgElement.innerText = "First Name should not be empty";
//         return false;
//     }

//     // 3. Check for minimum length
//     if (fn.length < 3) {
//         msgElement.innerText = "First Name should contain min 3 characters";
//         return false;
//     }

//     // 4. Check for maximum length (using else if because it's part of the length range check)
//     else if (fn.length > 8) {
//         msgElement.innerText = "First Name should contain max 8 characters";
//         return false;
//     }

//     // 5. Check for character pattern (regex)
//     // Only characters means the regex should match the *entire* string
//     var p = /^[A-Za-z]+$/; // Correct regex: ^ starts of string, $ end of string, + one or more characters
//     if (!fn.match(p)) { // Check if it *doesn't* match the pattern
//         msgElement.innerText = "First Name should contain only characters";
//         return false;
//     }

//     // If all checks pass, clear any message (if not already cleared) and return true
//     msgElement.innerText = ""; // Ensure message is cleared if all validation passes
//     return true; // Indicates success
// }
function validate() {
    // Get references to elements once
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var msg1Element = document.getElementById("msg1");
    var msg2Element = document.getElementById("msg2");

    // Regular expression for characters only (defined once)
    var charPattern = /^[A-Za-z]+$/;

    // Assume validity initially, set to false if any check fails
    var isValid = true;

    // --- Validate First Name (fn) ---

    // Clear previous message for fn
    msg1Element.innerText = "";

    // 1. Check if First Name is empty
    if (fn === "") {
        msg1Element.innerText = "First Name should not be empty";
        isValid = false; // Mark as invalid
    }
    // 2. Check First Name minimum length (only if not empty)
    else if (fn.length < 3) {
        msg1Element.innerText = "First Name should contain min 3 characters";
        isValid = false;
    }
    // 3. Check First Name maximum length (only if min length passed)
    else if (fn.length > 8) {
        msg1Element.innerText = "First Name should contain max 8 characters";
        isValid = false;
    }
    // 4. Check First Name character pattern (only if length checks passed)
    else if (!fn.match(charPattern)) { // If it does NOT match the pattern
        msg1Element.innerText = "First Name should contain only characters";
        isValid = false;
    }


    // --- Validate Last Name (ln) ---

    // Clear previous message for ln
    msg2Element.innerText = "";

    // 1. Check if Last Name is empty
    if (ln === "") {
        msg2Element.innerText = "Last Name should not be empty"; // Corrected message
        isValid = false;
    }
    // 2. Check Last Name minimum length (only if not empty)
    else if (ln.length < 3) {
        msg2Element.innerText = "Last Name should contain min 3 characters";
        isValid = false;
    }
    // 3. Check Last Name maximum length (only if min length passed)
    else if (ln.length > 8) {
        msg2Element.innerText = "Last Name should contain max 8 characters";
        isValid = false;
    }
    // 4. Check Last Name character pattern (only if length checks passed)
    else if (!ln.match(charPattern)) { // If it does NOT match the pattern
        msg2Element.innerText = "Last Name should contain only characters";
        isValid = false;
    }

    // Return true if all checks passed for both fields, false otherwise
    return isValid;
}