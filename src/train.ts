// ==================  Task-H

function getPositive(arr: number[]):string {
   let a: string  = ('');
   for(let i of arr) {
      if(i > 0) {
         a = a + i;
      }
   }
   return a.split('').join('');   
}

let result = getPositive([2, -1, 3]);
    console.log(result);


