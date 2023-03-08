// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = []; //After selecting character types, characters will be pushed to this array
  var characters = {
    numeric: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    lowercase: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    uppercase: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    specialCharacters: ["!", "?", "@", "#", "$", "%", "&"],
  };
  function getRandomItem(x) {
    //Used to select random items from arrays
    var randomIndex = Math.floor(Math.random() * x.length);
    var item = x[randomIndex];
    return item;
  }
  var pwLength = prompt(
    "How many characters long do you want your password to be?"
  );
  if (pwLength > 7 && pwLength < 129) {
  } else {
    alert(
      "Please give a numerical value of at least 8 and no greater than 128."
    );
    return; //This and other returns like it will force an exit from the function, stoppping the generate passowrd process
  }
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
  if (
    //This if statement will detect if the user failed to select any character types at all
    !haveLowercase &&
    !haveUppercase &&
    !haveNumeric &&
    !haveSpecialCharacters
  ) {
    alert("You must select at least one character type."); //If they didn't select any character types, then an alert will be sent to them and the return will force an exit from the generate password function
    return;
  }
  if (haveNumeric && haveLowercase && haveUppercase && haveSpecialCharacters) {
    //This if statement runs through all of the possible combination of character types, concats the character type arrays together, then selects and pushes random items into the passwoord array until it meets the password length given by the user. The password array is then returned with join(""), leaving no space between the items when printed
    var allCharacters = characters.lowercase.concat(
      characters.uppercase,
      characters.numeric,
      characters.specialCharacters
    );
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    }
    return password.join("");
  } else if (haveNumeric && haveLowercase && haveUppercase) {
    var allCharacters = characters.lowercase.concat(
      characters.uppercase,
      characters.numeric
    );
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    }
    return password.join("");
  } else if (haveLowercase && haveUppercase && haveSpecialCharacters) {
    var allCharacters = characters.lowercase.concat(
      characters.uppercase,
      characters.specialCharacters
    );
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    }
    return password.join("");
  } else if (haveUppercase && haveSpecialCharacters && haveNumeric) {
    var allCharacters = characters.uppercase.concat(
      characters.numeric,
      characters.specialCharacters
    );
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    }
    return password.join("");
  } else if (haveNumeric && haveLowercase && haveSpecialCharacters) {
    var allCharacters = characters.lowercase.concat(
      characters.numeric,
      characters.specialCharacters
    );
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    }
    return password.join("");
  } else if (haveLowercase && haveUppercase) {
    var allCharacters = characters.lowercase.concat(characters.uppercase);
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    }
    return password.join("");
  } else if (haveLowercase && haveNumeric) {
    var allCharacters = characters.lowercase.concat(characters.numeric);
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    }
    return password.join("");
  } else if (haveLowercase && haveSpecialCharacters) {
    var allCharacters = characters.lowercase.concat(
      characters.specialCharacters
    );
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    }
    return password.join("");
  } else if (haveUppercase && haveNumeric) {
    var allCharacters = characters.uppercase.concat(characters.numeric);
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    }
    return password.join("");
  } else if (haveUppercase && haveSpecialCharacters) {
    var allCharacters = characters.uppercase.concat(
      characters.specialCharacters
    );
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    }
    return password.join("");
  } else if (haveNumeric && haveSpecialCharacters) {
    var allCharacters = characters.numeric.concat(characters.specialCharacters);
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(allCharacters);
      result = getRandomItem(allCharacters);
      password.push(result);
    }
    return password.join("");
  } else if (haveLowercase) {
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(characters.lowercase);
      result = getRandomItem(characters.lowercase);
      password.push(result);
    }
    return password.join("");
  } else if (haveUppercase) {
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(characters.uppercase);
      result = getRandomItem(characters.uppercase);
      password.push(result);
    }
    return password.join("");
  } else if (haveNumeric) {
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(characters.numeric);
      result = getRandomItem(characters.numeric);
      password.push(result);
    }
    return password.join("");
  } else {
    for (var i = 0; i < pwLength; i++) {
      getRandomItem(characters.specialCharacters);
      result = getRandomItem(characters.specialCharacters);
      password.push(result);
    }
    return password.join("");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
