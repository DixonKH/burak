// ==================  Task-R


function hasProperty(num: string):number {
     let strArr:string[] = num.split("+");
     let sum = strArr.reduce((total, operand) => total + parseFloat(operand), 0);
    return sum;
}

const result = hasProperty("2+5");
console.log("result: ", result);







