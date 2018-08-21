const rword = require("rword");

function createRandomWord() {
    return rword.generate();
}

module.exports = {
    createRandomWord: createRandomWord
};
