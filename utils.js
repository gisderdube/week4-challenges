//console.log(randomwords);
function createRandomWord() {
	let randomwords = 'La mia anima è pervasa da una mirabile serenità, simile a queste belle mattinate di maggio'.split(
		' '
	);
	return randomwords[Math.floor(Math.random() * Math.floor(randomwords.length))];
	//return 'random word';
}

module.exports = { createRandomWord };
