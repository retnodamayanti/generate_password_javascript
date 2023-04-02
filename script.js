// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCriteria = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCriteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacacterCriteria = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
var numberCriteria = "0123456789";
var addedChar = "";
var password = "";

function generatePassword() {
  // A prompt asking user to enter character length between 8-128
  var charLen = prompt(
    "How many character would you like your password to contain?"
  ); 
  // an alert that has if function, if charLen is less than 8, console log("Ops! Password length must be at least 8 characters.")
  if (charLen >= 8 && charLen <= 128) {
  } else {
    alert(
      "Ops! Password length must be at least 8 characters and a maximum of 128 characters."
    ); 
    return; 
  }
  // if true, include at least one lowercase
  var addLowercase = confirm("Click OK to include lowercase"); 
  // if true include at least one lowercase, else continue
  var addUppercase = confirm("Click OK to include uppercase"); 
  // if true include at least 1 special char
  var addSpecilchar = confirm("Click OK to include special character"); 
  //  if true, include at least 1 number
  var addNumber = confirm("Click OK to include number"); 

  // If statement: Input should be validated and user need to select at least 1/4 character
  if (!addLowercase && !addUppercase && !addSpecilchar && !addNumber) {
      alert("Please include at least 1 password criteria");
  }

  if (addLowercase) {
    addedChar += lowercaseCriteria;
  }
  if (addUppercase) {
    addedChar += uppercaseCriteria;
  }
  if (addSpecilchar) {
    addedChar += specialCharacacterCriteria;
  }
  if (addNumber) {
    addedChar += numberCriteria;
  }

  // Generate random password using loop
  for (var i = 0; i < charLen; i++) {
    var passwordGenerated = Math.floor(Math.random() * addedChar.length);
    password += addedChar[passwordGenerated];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // password is generated matches the criteria
  // password written in the box
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// click button and the function run correctly
