function validatePasswords(passwords) {
 console.log( for (let i = 0; i < passwords.length; i++) {
    let str = passwords[i];
    let arr = passwords.filter((el) => el !== el[i]);
    !arr.includes(str) ? true : false;
  });

  passwords.map((password) => {
    if (
      password.length >= 5 &&
      containsUppercaseLetter(password) &&
      containsUppercaseLetter(password) &&
      containsNumber(password) &&
      containsSymbol(password)
    ) {
      return true;
    } else {
      return false;
    }
  });
}
console.log(validatePasswords([
  "Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]));

  // Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
  return /[A-Z]/.test(string);
}

// Returns true if string contains at least one lowercase letter.
function containsLowercaseLetter(string) {
  return /[a-z]/.test(string);
}

// Returns true if string contains at least one number.
function containsNumber(string) {
  return /[0-9]/.test(string);
}

// Returns true if string contains at least one symbol.
function containsSymbol(string) {
  return /[!#$%.*&]/.test(string);
}
