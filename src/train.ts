// ==================  Task-Q

interface T {
[key:string]: string;
}
function hasProperty(obj: T):boolean {
     return Object.prototype.hasOwnProperty.call(obj, "speed");   
}

const result = hasProperty({name: "BMW", model:"M3", year: "2019"});
console.log("result: ", result);







