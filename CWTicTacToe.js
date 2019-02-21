/*
CW Tic-Tac-Toe Checker (JS)
https://www.codewars.com/kata/tic-tac-toe-checker/javascript

If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we?
Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

/*
Personal comments:
I was frustrated at first with the logic of the PROBLEM itself.
But once I realized it did make sense to check if the boar isn't finished ONLY IF there wasn't a winner... I enjoyed practicing with arrays.

I tested for every horizonal line, then diagonals.  I wanted a cleaner way to check for diagonals but couldn't find one.

I loved the following solution so much that I wanted to remind myself of it here:
function isSolved(board) {
   board = board.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
   if(/0/.test(board)) return -1;
   return 0;
}

Its clean and easy to read, although it really is a bit clunky in some ways.

*/

function isSolved(board) {
    //checks every horizontal line
    for(let line of board) {
        if (line.every(x => x===line[0])) if (line[0]!=0) return line[0];
      }

    //checks diagonals
    let center = board[1][1];
    if (center!=0){
      if ((center === board [0][0] && center === board[2][2])||(center === board [0][2] && center === board[2][0])) return center;
      }

    //checks if all parts of board have been filled out
    for(let line of board) {
        if (line.some(x => x===0)) return -1;
      }

//its a cat's game! <-- apparently that's an expression? Never heard of it!!!
return 0;
}
