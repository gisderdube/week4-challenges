console.log("Let's get started!");

Promise.all([
    axios.get("/randomWord"),
    axios.get("/randomWord"),
    axios.get("/randomWord"),
    axios.get("/randomWord"),
    axios.get("/randomWord")
]).then(words => {
    for (i = 0; i < 5; i++) {
        $(".list").append("<li>" + words[i].data);
    }
});
