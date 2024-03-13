// ==================  Task-L
function reverseSentence(txt: string):string {
   const arr: string[] = txt.split(" ");
   const newStr:string[] = [];
   for(let i = 0; i < arr.length; i++) {
     let a:string = arr[i].split("").reverse().join("");
    newStr.push(a);
   }
   return newStr.join(" ");
}

const result = reverseSentence("We love coding");
console.log("result: ",result);







