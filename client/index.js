console.log('Let\'s get started!')
$(
  'body'
).append("<ul></ul>")
Promise.all([
  axios
    .get('/randomWord'),
    axios
    .get('/randomWord'),
    axios
    .get('/randomWord'),
    axios
    .get('/randomWord'),
    axios
    .get('/randomWord'),
    
  ])
  .then(response => {
    for(i=0;i<5;i++){
    $('body ul').append(`<li>${response[i].data}</li>`),
    console.log(response)}
  })
  .catch(err => {
    throw err;
  })

