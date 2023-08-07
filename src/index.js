function validateForm() {
    // Get the email input element
    var emailInput = document.getElementById('emailInput');

    // Check if the email input is not valid
    if (!emailInput.validity.valid) {
        // Display an error message or perform any other action
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    // If the input is valid, you can submit the form
    return true;
}


function handleFormSubmission(event){

    event.preventDeafult(); 
}

function showErrorPopup(message) {
    var errorMessage = document.querySelector("error-label");

    errorMessage.innerText = message;
    errorPopup.style.display = 'block';
}