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
//         if (answerArray.includes(guess)){
//             console.log("here GUESS INCLUDED" + guess);
//             guess= guess-1;
//         }
        if (answerArray[0] <= guess) {
          guess = answerArray[0]-1;
        }

        answerArray.unshift(guess);
       // console.log(`sum: ${currentSum} guess:${guess} answerArray: ${answerArray}`);
        currentSum -= Math.pow(guess,2);


      if (currentSum === 0) {
        return answerArray;}
      else if (currentSum ===3 || currentSum ===2 || guess <1){
        console.log(`EXCEPT time: ${answerArray} guess: ${guess} currentSum: ${currentSum}`)
        let areaSplice = (answerArray.findIndex(x => x===2)===-1) ? 1: (answerArray.findIndex(x => x===2)) + 1;
        console.log("Area to splice " + areaSplice);

        answerArray.splice(0,areaSplice);
        if (answerArray[0] === undefined) return null;

        //console.log(answerArray[0]-1);
        answerArray.splice(0,1,answerArray[0]-1);
        //answerArray[0] = (answerArray[0]-1);
        console.log("here in elif" + answerArray);
        currentSum = Math.pow(n,2) - answerArray.reduce((acc, i) => acc + Math.pow(i,2),0);
                console.log(`sum: ${currentSum} guess:${guess} answerArray: ${answerArray}`);

        //console.log(currentSum);
        return findAnswer(currentSum);
      }
      else {
          return findAnswer(guess);
        }
    }

    return findAnswer(n);

}
