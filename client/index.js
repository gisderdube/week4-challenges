console.log('Let\'s get started!')

Promise.all([
  axios.get('/randomWord'),
  axios.get('/randomWord'),
  axios.get('/randomWord'),
  axios.get('/randomWord'),
  axios.get('/randomWord')
]).then(values=>{
  $('body').append("<ul>");
  values.forEach(element => {
    $('ul').append("<li>"+element.data+"</li>")
  });
})

