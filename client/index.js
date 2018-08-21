console.log("Let's get started!");

Promise.all([
  axios.get("/randomword"),
  axios.get("/randomword"),
  axios.get("/randomword"),
  axios.get("/randomword"),
  axios.get("/randomword")
]).then(responses => {
  $("#ul-wrapper").append(`<ul></ul>`);
  responses.map(res => {
    $("#ul-wrapper ul").append(`<li>${res.data}</li>`);
    console.log(res.data);
  });
});
