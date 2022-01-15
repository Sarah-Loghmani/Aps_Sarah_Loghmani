//  We'll create a function match which takes a candidate and a job, which will return a boolean indicating whether the job is a valid match for the candidate.also include 10% wiggle room (deducted from the candidate's minimum salary)
// function match(candidate, job) {
  // is this job a valid match for the candidate?
  if (job.maxSalary && candidate.minSalary) {
    let salary = candidate.minSalary - (candidate.minSalary * 10) / 100;
    return salary <= job.maxSalary;
  } else {
    throw "ERROR";
  }

// ******************************************************************
// Split The Bill
function splitTheBill(x) {
  //code away...
  let arr = Object.values(x);
  let sum = arr.reduce((a, b) => a + b) / arr.length;
  for (let key in x) {
    x[key] = Math.round((x[key] - sum) * 100) / 100;
  }
  return x;
}

// ******************************************************************
// Crash Override
function aliasGen(f, s) {
  // Code Here
 
  if (parseInt(f[0]) || parseInt(s[0]) ){
    return "Your name must start with a letter from A - Z.";
  } else {
    f = f[0].toUpperCase();
    s = s[0].toUpperCase();
    return `${firstName[f]} ${surname[s]}`;
  }

  // ****************************************************************
  // Regular Ball Super Ball
var Ball = function(ballType) {
  // your code goes here
  if(!ballType){
    this.ballType = 'regular'
  }else{
  this.ballType = ballType
  }
};

// *****************************************************************
// Disemvowel Trolls
function disemvowel(str) {
  let regExp= /[ieaou]/ig
  return str.replace(regExp, '');
}
// second solution
function disemvowel(str) {
let arr=str.split('');
  let str1= '';
   arr.filter(x=> !'ieaouIEAUO'.includes(x)).forEach(e=> str1+=e)
  return str1
}

// ******************************************************************
// Multiples of 3 or 5
function solution(number) {
    let sum = 0;
    if(number<0){return 0;}
    for(let i=3;i<number;i++){
        if(i%3===0 || i%5===0){sum+=i;}
      }
  return sum;
}
solution(10);
