//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/solutions/javascript/me/best_practice

//In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
//	1.  The input string will always be lower case but maybe empty.

//2.  If the character in the string is whitespace then pass over it as if it was an empty seat.


//Interesting one.  I chose an array vs string options because I was thinking it would be more effecient.




function wave(str){
  const strArray = str.split('');

  const map1 = strArray.map(function(x,index){
    if (strArray[index] === ' ') return;
    let newthing = Array.from(strArray);
    newthing[index] = strArray[index].toUpperCase();
    return newthing.join('');
});

return map1.filter(x => x !=null);
  
}
