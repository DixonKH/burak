// ==================  Task-I

function getDigit(digit: string): string {
   const str = digit.split('');
   const numbers = [];
   for(let a of str) {
       const num = parseInt(a);
       console.log("num: ", num);
       
       if(!isNaN(num)) {
           numbers.push(num);
       }
   }

  return numbers.join('');           
}

const result = getDigit('m14i1tfgfv6kj');

console.log("result: ", result);



