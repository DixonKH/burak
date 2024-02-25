// ==================  Task-H

function getReverse(txt: string) {
     let arr = txt.split('').reverse().join('');
     return arr;
}

let result:string = getReverse("hello");

console.log("reversedArrey: ", result);
