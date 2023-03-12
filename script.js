// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function throwTryAgain(message) {
  alert(
    message
  );
  return "Please Try Again"; //This and other returns like it will force an exit from the function, stoppping the generate passowrd process
}
 
function generatePassword() {
  function createPassword() {
    //This function takes the concatenated array and selects a random item to then push into the empty array
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    };
  };
  var password = []; //After selecting character types, characters will be pushed to this blank array
  var characters = {
    numeric: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    specialCharacters: ["!", "?", "@", "#", "$", "%", "&", "*", "<", ">", "(", ")", "+", "-", "_", "="]
  };
  function getRandomItem(x) {
    //Used to select random items from arrays
    var randomIndex = Math.floor(Math.random() * x.length);
    var item = x[randomIndex];
    return item;
  };
  var pwLength = parseInt(prompt(
    "How many characters long do you want your password to be?"
  ));
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) { //This confirms whether or not the user inserted a numerical value that is at least 8 and no greater than 128. As well, I used parseInt to transfer the prompt answer to a number type, thus the isNaN conrirms if they actually gave a number and not a string of a word like "apple"
    return throwTryAgain("Please give a numerical value of at least 8 and no greater than 128."); //This and other returns like it will force an exit from the function, stoppping the generate passowrd process
  };
  var haveNumeric = confirm(
    //This section sends confirms to let the user select all of the characters they want to make up their password
    "Select OK if you want your password to contain numeric characters."
  );
  var haveUppercase = confirm(
    "Select OK if you want your password to contain uppercase characters."
  );
  var haveLowercase = confirm(
    "Select OK if you want your password to contain lowercase characters."
  );
  var haveSpecialCharacters = confirm(
    "Select OK if you want your password to contain special characters."
  );
var allCharacters = []

  if (
    //This if statement will detect if the user failed to select any character types at all
    !haveLowercase &&
    !haveUppercase &&
    !haveNumeric &&
    !haveSpecialCharacters
  ) {
    return throwTryAgain("You must select at least one character type.")
  }
  if (haveLowercase) { //This if statement and the other ones below it check if the user selected certain character types and adds them to the array of characters for the password
    allCharacters = allCharacters.concat(characters.lowercase);
  }
  if (haveUppercase) {
    allCharacters = allCharacters.concat(characters.uppercase);
  }
  if (haveNumeric) {
    allCharacters = allCharacters.concat(characters.numeric);
  }
  if (haveSpecialCharacters) {
    allCharacters = allCharacters.concat(characters.specialCharacters);
  }
  createPassword();
  return password.join(""); //Sends the finalized password to the write password function. Using join("") allows for there to be no commas or spaces between the array items
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
