const randomWord = require('random-word');

function createRandomWord(){
  return randomWord();
}

module.exports = {
  createRandomWord
}