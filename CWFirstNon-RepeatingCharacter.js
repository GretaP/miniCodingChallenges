//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/solutions/javascript
/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/
// realized later I should have thought of just checking regex for rest of string.... but this was fun to think about.



function firstNonRepeatingLetter(s) {
  const only =  s.split('').filter(function(el, index, array){
     let arr = s.toLowerCase().split('');
     arr.splice(index,1);  //so that we check every OTHER part of the array
     return (arr.includes(el.toLowerCase()) === false);
   });
  return (only[0]) ?  only[0]: '';
  }
