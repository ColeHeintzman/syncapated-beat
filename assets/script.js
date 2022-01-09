
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmUpper;
var confirmLower;
var confirmSpecial;
var confirmNumber;
var inputOptions;
var upperCase = ["A", "B", "C", "D", "E", "F", "g", "h", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var password

//* Write the Password to the Page
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
      passwordText.value = password;
      
      }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //*Password Length Question *//
  passwordLength = prompt("How many characters does your password require?  Choose between 8 and 128");
  console.log(" password length " + passwordLength);
    if(passwordLength) {
      alert(" You entered " + passwordLength);
    }
    if(passwordLength < 8 || passwordLength > 128){
      alert("The number of characters ( " + passwordLength + " ) is not a valid entry.  Please choose a number between 8 and 128.");
      return generatePassword();
    }  
  //*UpperCase Letter Input *//
  confirmUpper = confirm("Does your password require Upper case letters?  Choose 'ok' for yes, 'cancel' for no.");  
  if (confirmUpper == true) {
      alert("Your password will contain Upper Case letters");
    }
    else if(confirmUpper == false) {
      alert("Your password will NOT contain Upper Case letters");
    }
  //*Lower case Input*//
  confirmLower = confirm("Does your password require Lower case Letters?  Choose 'ok' for yes, 'cancel' for no.");
    if (confirmUpper == true) {
      alert("Your password will contain Lower Case letters");
      } 
      else if(confirmUpper == false) {
      alert("Your password will NOT contain Lower Case letters");
      }
  //* Special Character Input*//
  confirmSpecial = confirm("Does your password require Special Characters?  Choose 'ok' for yes, 'cancel' for no.");
    if (confirmUpper == true) {
      alert("Your password will contain Special Characters");
      }
      else if(confirmUpper == false) {
      alert("Your password will NOT contain Special Characters");
      }
  //* Number Input *//
  confirmNumber = confirm("Does your password require Numbers?  Choose 'ok' for yes, 'cancel' for no.");
    if (confirmUpper == true) {
      alert("Your password will contain Numbers");
      }
      else if(confirmUpper == false) {
      alert("Your password will NOT contain Numbers");
      }
      console.log(confirmUpper, confirmLower, confirmSpecial, confirmNumber);
  //*Must Choose One Option if all False*//
      if(confirmUpper == false && confirmLower == false && confirmSpecial == false && confirmNumber == false) {
      inputOptions = alert("You must choose atleast one of the previous options.");
        return generatePassword();
    }
  //*Potential Input Selections*//
      if(confirmUpper == true && confirmLower == true && confirmSpecial == true && confirmNumber == true) {
        inputOptions = upperCase.concat(lowerCase, specialCharacter, numbers);
        }
      if(confirmUpper == true && confirmLower == false && confirmSpecial == false && confirmNumber == false) {
        inputOptions = lowerCase;
        }
      if(confirmUpper == false && confirmLower == true && confirmSpecial == false && confirmNumber == false) {
        inputOptions = upperCase;
        }
      if(confirmUpper == false && confirmLower == false && confirmSpecial == true && confirmNumber == false) {
        inputOptions = specialCharacter;
        }
      if(confirmUpper == false && confirmLower == false && confirmSpecial == false && confirmNumber == true) {
        inputOptions = numbers;
        }
      if(confirmUpper == true && confirmLower == true && confirmSpecial == true && confirmNumber == false) {
        inputOptions = lowerCase.concat(numbers, specialCharacter);
        }
      if(confirmUpper == false && confirmLower == true && confirmSpecial == true && confirmNumber == true) {
        inputOptions = lowerCase.concat(specialCharacter, numbers);
        }
      if(confirmUpper == true && confirmLower == false && confirmSpecial == true && confirmNumber == true) {
        inputOptions = upperCase.concat(specialCharacter, numbers);
        }
      if(confirmUpper == true && confirmLower == true && confirmSpecial == false && confirmNumber == true) {
        inputOptions = upperCase.concat(lowerCase, numbers);
        }
      if(confirmUpper == false && confirmLower == false && confirmSpecial == true && confirmNumber == true) {
        inputOptions = specialCharacter.concat(numbers);
        }
      if(confirmUpper == true && confirmLower == false && confirmSpecial == false && confirmNumber == true) {
        inputOptions = upperCase.concat(numbers);
        }
      if(confirmUpper == true && confirmLower == true && confirmSpecial == false && confirmNumber == false) {
        inputOptions = upperCase.concat(lowerCase);
        }
      if(confirmUpper == false && confirmLower == true && confirmSpecial == true && confirmNumber == false) {
        inputOptions = lowerCase.concat(specialCharacter);
        }
      if(confirmUpper == true && confirmLower == false && confirmSpecial == true && confirmNumber == false) {
        inputOptions = upperCase.concat(specialCharacter);
        }
      if(confirmUpper == false && confirmLower == true && confirmSpecial == false && confirmNumber == true) {
        inputOptions = lowerCase.concat(numbers);
        }
      //* Password Magic*//
      var passwordBlank = [];
      for (var i = 0; i < passwordLength; i++) {
        var randomPassword = inputOptions[Math.floor(Math.random() * inputOptions.length)];
        passwordBlank.push(randomPassword);
      }
      password = passwordBlank.join("");
      alert("Your Password is: " + password);
      console.log(password);
}
    
