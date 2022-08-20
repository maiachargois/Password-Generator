// Assignment code here
var chars = "0123456789/*abcdefghijklmnopqrstuvwxyz!@#$%^&*()+-"
var special = [
    "!",
    "\u0022",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "\u005B",
    "\u005C",
    "\u005D",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
];
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// The following initiates the prompts for the user //
var length = confirm("Enter a passowrd length no less than 8 characters and no more than 128")),
    charType = confirm("would you like your ")
    password = generatePassword();





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  function generatePassword() {
    var charSets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(""),
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(""),
        numeric: '0123456789',
        special: 
      }
      var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
      var retVal = "";
      for (var i = 0; i < length; i++) {
        retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      return retVal;
  passwordText.value = password;

}
}

for (var i = 0; i <= passwordlength; i++) {
    var randomNumber = Math.floor(Math.random()*chars.length);
    password += chars.substring(randomNumber, randomNumber+1);
}

document.getElementById("password").value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);