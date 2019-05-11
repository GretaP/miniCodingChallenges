/*
Cleaned up firt draft with basic logic as I first figured it out.  I'm sure there is a more effecient way to do this, but it works.

https://www.codewars.com/kata/square-into-squares-protect-trees/train/javascript/5cd4d65a9d689c0018d8b748
-------------------------------------
Here's the instructions for the problem:
My little sister came back home from school with the following task: given a squared sheet of paper she has to cut it in pieces which, when assembled, give squares the sides of which form an increasing sequence of numbers. At the beginning it was lot of fun but little by little we were tired of seeing the pile of torn paper. So we decided to write a program that could help us and protects trees.

Task
Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².

If there are multiple solutions (and there will be), return the result with the largest possible values:

Examples
decompose(11) must return [1,2,4,10]. Note that there are actually two ways to decompose 11², 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.

For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49] doesn't form a strictly increasing sequence.

Note
Neither [n] nor [1,1,1,…,1] are valid solutions. If no valid solution exists, return nil, null, Nothing, None (depending on the language) or "[]" (C) ,{} (C++), [] (Swift, Go).

The function "decompose" will take a positive integer n and return the decomposition of N = n² as:

[x1 ... xk] or
"x1 ... xk" or
Just [x1 ... xk] or
Some [x1 ... xk] or
{x1 ... xk} or
"[x1,x2, ... ,xk]"
depending on the language (see "Sample tests")

Note for Bash
decompose 50 returns "1,3,5,8,49"
decompose 4  returns "Nothing"
Hint
Very often xk will be n-1.

*/

function decompose(n) {
    let answerArray = [];
    let currentSum = Math.pow(n, 2);
    let guess;

    let findAnswer = function (x) {
      //block checks if this is the first iteration, else sets the guess for what root to add to the answer
      if (currentSum === Math.pow(n,2)) {
        guess = n-1;
        }
        else{
          guess = Math.floor(Math.sqrt(currentSum));
          if (answerArray[0] <= guess) guess = answerArray[0]-1;
          }

      answerArray.unshift(guess);
      currentSum -= Math.pow(guess,2);

      //Winning condition is if currentSum = 0, in which case we can return the Array
      if (currentSum === 0) {
        return answerArray;
        }


      //if Sum is 3,2, or less than 1, it means that the problem will not be solved with current answers
      else if (currentSum ===3 || currentSum ===2 || guess <1){
        //if the Answer does not have a 2 in it, we always remove the last # from the answer array.
        //Otherwise, we remove all numbers up to the # before 2 in the array.
        let areaSplice = (answerArray.findIndex(x => x===2)===-1) ? 1: (answerArray.findIndex(x => x===2)) + 1;
        answerArray.splice(0,areaSplice);

        //if the array is now empty, there will not be an answer to the problem.
        if (answerArray[0] === undefined) return null;

        //We now want to check for another answer by reducing the last element in the array by 1, setting the Sum appropriately, and running the process again
        answerArray.splice(0,1,answerArray[0]-1);
        currentSum = Math.pow(n,2) - answerArray.reduce((acc, i) => acc + Math.pow(i,2),0);
        return findAnswer(currentSum);
      }
      else {
          return findAnswer(guess);
        }
    }
    return findAnswer(n);
}
