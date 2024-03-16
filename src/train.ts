// ==================  Task-L
function getScuareNumbers(num: number[]): {number: number, square: number}[]{
   let squaredArr:{number: number, square: number}[] = [];
   for(let a of num) {
      let objarr = {number: a, square: Math.pow(a, 2)};
      squaredArr.push(objarr);
   }
   return squaredArr;
}

const result = getScuareNumbers([5, 4, 3, 7, 8]);
console.log("result: ", result);







