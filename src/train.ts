// ==================  Task-M

function palindromCheck(txt: string): boolean{
   const arr:string = txt.split("").reverse().join("");
   if(txt === arr) return true;
   else return false;
   
}

const result = palindromCheck("ukku");
console.log("result: ", result);







