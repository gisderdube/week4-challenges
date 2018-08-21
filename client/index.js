console.log("Let's get started!");

Promise.all([
    axios.get("/random-word"),
    axios.get("/random-word"),
    axios.get("/random-word"),
    axios.get("/random-word"),
    axios.get("/random-word")
]).then(result => {
    $("body").append("<ul></ul>");
    result.forEach(function(el) {
        $("ul").append("<li>" + el.data + "</li>");
    });
});

// In your client/index.js file, make a axios-get-request (you do not have to install the package,
// you can just reference axios) to your server and get a random word from your newly created route.
// Do that 5 times. You can choose to either chain the promises or use Promise.all to wait for all responses

// When you have those 5 words, create a new <ul> with a <li> containing one of the random words
// and append it to the index.html. (You may use jQuery here).
