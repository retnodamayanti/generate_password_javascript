// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCriteria = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCriteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialcharacacterCriteria = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
var numberCriteria = "0123456789";

function generatePassword() {
  var charleng = prompt("How many character would you like your password to contain?"); // A prompt asking user to enter character length between 8-128
  if (charleng >= 8 && charleng <= 128) {
  } else {
    alert("Ops! Password length must be at least 8 characters and a maximum of 128 characters."); // an alert that has if function, if charleng is less than 8, console log("Ops! Password length must be at least 8 characters.")
    return; // the value of input need to be at least 8 char and max 128
  }  
    var addlowercase = confirm("Click OK to include lowercase") // if true, include at least one lowercase
    
    var adduppercase = confirm("Click OK to include uppercase") // if true include at least one lowercase, else continue
    
    var addspecilchar = confirm("Click OK to include special character") // if true include at least 1 special char
    
    var addnumber = confirm("Click OK to include number")  //  if true, include at least 1 number
   
    if (!addlowercase && !adduppercase && !addspecilchar && !addnumber) { // If statement: Input should be validated and user need to select at least 1/4 character
      alert("Please include at least 1 password criteria");
    }


  
  
  

  return passwordGenerated
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