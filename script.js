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
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
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
  if (haveLowercase) {
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
  return password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
