// ==================  Task-N

function calculateSumOfNumbers(txt: any[]): any{
    let sum = 0;
    for(let i = 0; i < txt.length; i++) {
      if(typeof txt[i] === 'number'){
         sum += txt[i];
      }
    }  
   return sum;
}

const result = calculateSumOfNumbers([10, "16", {son:11}, true, 1, 15]);
console.log("result: ", result);







