// axios.get('/utils.js').then(function(response) {
// 	console.log(createRandomWord);
// });
const pr1 = axios.get('/random-word');
const pr2 = axios.get('/random-word');
const pr3 = axios.get('/random-word');
const pr4 = axios.get('/random-word');
const pr5 = axios.get('/random-word');
Promise.all([ pr1, pr2, pr3, pr4, pr5 ]).then((response) => {
	$('#word-wrap').append('<ul></ul>');
	response.forEach((word) => {
		$('#word-wrap ul').append(`<li>${word}</li>`);
	});
});
