// working through it, mid-way


function decompose(n) {
    if (n===1) return [1];
    let answerArray = [];
    let currentSum = Math.pow(n, 2);
    let guess;
    
    let findAnswer = function (x) {
        if (currentSum === Math.pow(n,2)) 
          {guess = n-1;
          }
        else{
          guess = Math.floor(Math.sqrt(currentSum));
          }
        if (answerArray.includes(guess)){
            console.log("here");
            guess= guess-1;
        }
        answerArray.unshift(guess);
        console.log(`sum: ${currentSum} guess:${guess} answerArray: ${answerArray}`);
        currentSum -= Math.pow(guess,2);
  
    
      if (currentSum === 0) {     
        return answerArray;}
      else if (currentSum ===3 || currentSum ===2 || guess <1){
        console.log(`other thing: ${answerArray} guess: ${guess} currentSum: ${currentSum}`)
        answerArray.shift;
        return "Something Else";
      }
      else {
          return findAnswer(guess);
        }
    }
    
    return findAnswer(n);
    
}

