// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charleng = prompt("How many character would you like your password to contain?"); // A prompt asking user to enter character length between 8-128
  if (charleng >= 8 && charleng <= 128) {
  } else {
    alert("Ops! Password length must be at least 8 characters and a maximum of 128 characters."); // an alert that has if function, if charleng is less than 8, console log("Ops! Password length must be at least 8 characters.")
    return;
  }  // the value of input need to be at least 8 char and max 128
    var addlowercase = confirm("Click OK to include lowercase")
    // if true, include at least one lowercase
    var adduppercase = confirm("Click OK to include uppercase")
    // if true include at least one lowercase, else continue
    var addspecilchar = confirm("Click OK to include special character")
    // if true include at least 1 special char
    var addnumber = confirm("Click OK to include number")
    //  if true, include at least 1 number
    if (!addlowercase && !adduppercase && !addspecilchar && !addnumber) {
      alert("Please include at least 1 password criteria");
      else {
        alert(Invalid password criteria)
      }
    }


  
  
  }
 
  



//   // A confirm asking lowercase, uppercase, number, and special character, user need to confirm at least one
//   var lowercase = confirm("Click OK to include lowecase")
//   // if true, include at least one lowercase
//   var uppercase = confirm("Click OK to include uppercase")
//   // if true include at least one lowercase, else continue
//   var specilchar = confirm("Click OK to include special character")
//   // if true include at least 1 special char
//   var number = confirm("Click OK to include number")
//   //  if true, include at least 1 number


//   // If statement: Input should be validated and user need to select at least 1/4 character
//   return passwordGenerated
// } 

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