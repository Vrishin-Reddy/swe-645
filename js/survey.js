// Vrishin Reddy Minkuri 
// G01444633 

// Function to validate raffle numbers
function validateRaffle() {
    const raffleInput = document.getElementById("raffle").value;
    const raffleNumbers = raffleInput.split(",").map(num => parseInt(num.trim(), 10));
    const validNumbers = raffleNumbers.filter(num => num >= 1 && num <= 100);
    
    if (validNumbers.length < 10 || validNumbers.some(isNaN)) {
      alert("Please enter at least 10 valid numbers between 1 and 100, separated by commas.");
      return false;
    }
    return true;
  }
  
  // General form validation function
  function validateForm() {
    if (!validateRaffle()) {
      return false;
    }
  
    // Example of additional validation
    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    return true; // Only return true if all validations pass
  }
  
  // Function to validate email addresses
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  
  // Add event listener to the form on submission
  document.querySelector("form").addEventListener("submit", function(event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form from submitting if validations fail
    }
  });
  