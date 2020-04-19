// Assignment Code
// Global Scope
var generateBtn = document.querySelector("#generate");
var rand = function name(a, b) {
  return Math.floor(Math.random() * b)+ a;
}
     
// Write password to the #password input

function generatePassword(upPw, lowPw, numPw, charPw, length) {
  var lower = ("abcdefghijklmnopqrstuvwxyz");
  var upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var special = (" !@#$%^&*()_-=+~`|}{][\/?<>;:.,'" + '"');
  var numbers = ("0123456789");
  console.log(upPw)
  console.log(lowPw)
  console.log(numPw)
  console.log(charPw)
  console.log(length)
  var myPassword = "";

  for (var i = 0; i < length;) {
    if (upPw && i < length) {
      myPassword += upper[rand(0,upper.length)];
      i++; 
     
    }
    if (lowPw && i < length) {
      myPassword += lower[rand(0, lower.length)];
      i++;
    }
    if (numPw && i < length) {
      myPassword += numbers[rand(0, numbers.length)];
      i++;
      
    }
    if (charPw && i < length) {
      myPassword += special[rand(0, special.length)];
      i++;
      
    }

  }
return myPassword;


}

function writePassword() {
  var password = ("")


  alert("Welcome to Password Generator! Password will be generated based on your answers!");
  var length = prompt("How many Characters would you like? (8 - 128 Characters!)");
  if (length >= 8 && length <= 128) {
    var upPw = confirm("Would you like an Uppercase letter?");
    var lowPw = confirm("Would you like lowercase letters?");
    var numPw = confirm("Would you like to use Number(s)?");
    var charPW = confirm("Would you like Special Character(s)?");
    if (!(upPw || lowPw || numPw || charPW)) {
      alert(" Please select at least one character type")

    }



  } else {
    alert("PLEASE SELECT BETWEEN 8 - 128 CHARACTERS!")

  }

  password = generatePassword(upPw, lowPw, numPw, charPW, length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password.length)

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
