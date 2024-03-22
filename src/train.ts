// ==================  Task-P

interface T {
[key:string]: number;
}
function objectToArray(obj: T):[string, number][] {
     return Object.entries(obj);
     
}

const result = objectToArray({a: 30, b:50});
console.log("result: ", result);







