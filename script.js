// Assignment code here
//boolean flag for prompts later //
const flags = {
    uppercase: false,
    numbers: false,
    symbols: false,
    length: 5
}
app.js

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// The following initiates the prompts for the user //
var length = prompt("Enter a passowrd length \n no less than 8 characters and no more than 128?")
    charType = confirm("would you like your special characters in your password? ")



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  function generatePassword() {
    var charSets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(""),
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(""),
        numeric: '0123456789'.split(""),
        special:[ "\u0022",
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
        "~"].split
      }
      var chars = chars[charType.toLowerCase()] || charSets.lowercase;
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