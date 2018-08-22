console.log("Let's get started!");
// const axios = require('axios')
const p1 = axios.get("/random")
const p2 = axios.get("/random")
const p3 = axios.get("/random")
const p4 = axios.get("/random")
const p5 = axios.get("/random")
const randomArr = [];


Promise.all([p1, p2, p3, p4, p5])
  .then(function(response) {
    console.log(response);
    randomArr.push(response)
    // $('.random').html(randomArr[0][0].data)
    let newWord = randomArr[0][0].data
    $('.random').html(`"Randomly Generated Words ;-)"<ul><li>${newWord}</li></ul>`)
    // $('li').after(newWord)
  })
  .catch(function(error) {
    console.log(error);
  });