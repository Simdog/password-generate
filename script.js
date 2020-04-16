// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword () {
var lower = ("abcdefghijklmnopqrstuvwxyz")
var Special = []
var numbers = ("")

}

function writePassword() {
  alert("Welcome to Password Generator! Password will be generated based on your answers!");
  var length = prompt("How many Characters would you like? (8 - 128 Characters!)");
  if (length >= 8 && length <=128) {
    var upPw = confirm("Would you like an Uppercase letter?"); 
    var lowPw = confirm("Would you like lowercase letters?");
    var numPw = confirm("Would you like to use Number(s)?");
    var charPW = confirm("Would you like Special Character(s)?");
    if (! upPw  || lowPw  || numPw || charPW ) {
      alert(" Please select at least one character type")
      
    }


    

    
  } else {
    alert("PLEASE SELECT BETWEEN 8 - 128 CHARACTERS!")
    
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
