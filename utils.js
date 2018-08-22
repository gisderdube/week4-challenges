  function createRandomWord(){
  const things=['apple', 'joke', 'tiger', 'pear', 'chocolate', 'cucumber', 'win', 'tunes', 'activity', 'taco', 'assassin']
  return things[Math.floor(Math.random()*things.length)] +things[Math.floor(Math.random()*things.length)]
}

module.exports={
createRandomWord
}