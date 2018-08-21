const rword = require("rword");

const createRandomWord = function() {
    return rword.generate();
};

module.exports = createRandomWord;
