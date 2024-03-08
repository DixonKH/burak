// ==================  Task-J

function findLongestWord(txt: string):string{
    let arr = txt.split(" ");
    let longIndex = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length > arr[longIndex].length) {
            longIndex = i;
        }
    }
    return arr[longIndex];  
}

const result = findLongestWord('I am Dixon and I am from Uzbekistan');
console.log(result);



