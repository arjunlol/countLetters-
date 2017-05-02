


function countLetters (letters){
  var countOfLetters = {};
  letters = letters.split(" ").join("").toLowerCase();
  for (l of letters){
    if(countOfLetters[l]) {
      countOfLetters[l] +=1;
    } else {
      countOfLetters[l] = 1;
    }
  //   countOfLetters = isItInObject(l, countOfLetters);
 }
 return countOfLetters;
}


function isItInObject(letter, lettersObject){

  for (key in lettersObject){
    if (letter == key){
      lettersObject[key] = Number(lettersObject[key])+1;
      return lettersObject;
    }
  }
  lettersObject[letter] = 1;
  return lettersObject
}
console.log(countLetters("lighthouse in the house"));
//isItInObject("r", {l:"2"});