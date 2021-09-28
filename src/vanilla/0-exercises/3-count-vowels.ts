function countVowelsInEach() {
  // your code here
}

function countVowels(string: string): number {
  // your code here
  //adding in the pseudocode 
  const vowels = ["a","e","i","o","u"]
  const arrOfStrings = string.split("")
  let total = 0

  for (let str of arrOfStrings) {
    //if str is a vowel then 
    //const array1 = [1, 2, 3];
    //console.log(array1.includes(2));
    if (vowels.includes(str)) {
      total ++
    
    }
  }
  return total;
 //could do a seperate function that checks if its a vowel

 //get logic before you think of code
 //try to write another version where you write isavowel, a new function to check if it is a vowel

}

export { countVowelsInEach, countVowels };
