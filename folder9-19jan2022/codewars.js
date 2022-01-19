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

const statements = {
  1: ["It is certain", "positive"],
  2: ["It is decidedly so", "positive"],
  5: ["You may rely on it", "positive"],
  6: ["As I see it, yes", "positive"],
  7: ["Most likely", "positive"],
  8: ["Outlook good", "positive"],
  9: ["Reply hazy, try again", "natural"],
  10: ["Ask again later", "natural"],
  11: ["Better not tell you now", "natural"],
  12: ["Cannot predict now", "natural"],
  13: ["Don't count on it", "negative"],
  14: ["My reply is no", "negative"],
  15: ["My sources say no", "negative"],
  16: ["Outlook not so good", "negative"],
};

let random = Math.floor(Math.random() * 16 + 1);
for (let key in statements) {
  if (Number(key) == random) {
    console.log(`${statements[key][0]}, ${statements[key][1]}`);
  }
}