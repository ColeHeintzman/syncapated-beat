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
      alert("The number of characters ( " + passwordLength + " ) is not valid.  Please choose a number between 8 and 128.");
    }
    

}