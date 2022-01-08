// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmUpper;
var confirmLower;
var confirmSpecial;
var confirmNumber;
var userChoices;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  passwordLength = prompt("How many characters does your password require?  Choose between 8 and 128");
  console.log(" password length " + passwordLength);
    if(passwordLength) {
      alert(" You entered " + passwordLength);
    }
    if(passwordLength < 8 || passwordLength > 128){
      alert("The number of characters ( " + passwordLength + " ) is not a valid entry.  Please choose a number between 8 and 128.");
      return generatePassword();
    }
  confirmUpper = confirm("Does your password require Upper case letters?  Choose 'ok' for yes, 'cancel' for no.");
  confirmLower = confirm("Does your password require Lower case Letters?  Choose 'ok' for yes, 'cancel' for no.");
  confirmSpecial = confirm("Does your password require Special Characters?  Choose 'ok' for yes, 'cancel' for no.");
  confirmNumber = confirm("Does your password require Numbers?  Choose 'ok' for yes, 'cancel' for no.");
  console.log(confirmUpper, confirmLower, confirmSpecial, confirmNumber);

    

}