//  We'll create a function match which takes a candidate and a job, which will return a boolean indicating whether the job is a valid match for the candidate.also include 10% wiggle room (deducted from the candidate's minimum salary)
function match(candidate, job) {
  // is this job a valid match for the candidate?
  if (job.maxSalary && candidate.minSalary) {
    let salary = candidate.minSalary - (candidate.minSalary * 10) / 100;
    return salary <= job.maxSalary;
  } else {
    throw "ERROR";
  }
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
  //   let test = '0123456789'
  //   let arrF = f.split('')
  //   console.log(arrF)
  //   let arrS = f.split('')
  //   console.log(arrS)
  if ("0123456789".indexOf(f[0]) !== -1 || "0123456789".indexOf(s[0]) !== -1) {
    return "Your name must start with a letter from A - Z.";
  } else {
    f = f[0].toUpperCase();
    s = s[0].toUpperCase();
    return `${firstName[f]} ${surname[s]}`;
  }
}
