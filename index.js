function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];

  for(var i=0; i<musicians.length; i++){
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
  };

  return beatlesArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var excitedFacts = [];
  while (i < facts.length) {
    excitedFacts.push(facts[i] + "!!!");
    i++
  };
  return excitedFacts;
}

function iLoveTheBeatles(n){
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return loveArray;
}
