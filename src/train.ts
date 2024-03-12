// ==================  Task-K

function countVowels(txt:string): number {
   const vowels: string = "aeiouAEIOU";
   let extractVowels: string = "";
   for(let letter of txt) {
    if(vowels.includes(letter)) {
        extractVowels += letter;
    }
   }
   return extractVowels.length;
}

const result = countVowels("string");
console.log("vowels: ", result);






