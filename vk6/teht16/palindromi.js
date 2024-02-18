const prompt = require('prompt-sync')();
function isPalindrome(word) {
  var reversedWord = word.split('').reverse().join('');

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

var word = prompt("Kirjoita sana: ");
console.log(isPalindrome(word));
