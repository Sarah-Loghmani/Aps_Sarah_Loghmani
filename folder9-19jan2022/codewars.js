// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


const getCount = (str)=>{
    const vowels =['a', 'e', 'i', 'o', 'u']
    return str.split("").filter((char) => vowels.includes(char)).length;

}
// console.log(getCount("abracadabra"));;
// ------------------------------------------------------------------------------------

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer




const squareDigits= (num)=>{
  let square = num
    .toString()
    .split("")
    .map((ele) => (ele)**2)
    .join("");
  return Number(square);
}
console.log(squareDigits(3212));
// --------------------------------------------------

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.