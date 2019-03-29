/*Codewars https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

This was very simple, except I kept expecting slice to act differently than it did.
I also re-learned that something that evaluates to 0 is falsy, and that JS seems to automatically truncate when evaluating decimals as int in some situations.

*/


// original: return (s.length %2)==0 ? s.slice(s.length/2-1, s.length/2+1) : s.charAt(Math.floor(s.length/2));
//apparently, s.charAt(Math.floor(s.length/2)) <--- Math.floor isn't needed, JS automatically truncates?
//Also, I noticed that I could evaluate s.length %2 directly (because 0 is falsy), and simplify the first condition using substr

return (s.length %2) ? s.charAt(s.length/2) : s.substr(s.length/2-1, 2);



//Also after looking at examples I realized that I can just do this mathematically; return substr (start/end points rely on math)
