//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

console.log("Numbers Assessment #1:  " + (num10 + parseInt(string8, 10) + one));

//2. write a loop that will log only numbers divisible by 3 between 20 - 100
let answer = "";
for (let i = 20; i <= 100; i++) {
  if (i % 3 == 0) {
    answer += ` ${i}`;
  }
}

console.log("Numbers Assessment #2:  " + answer);


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

function average(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    const element = numArray[i];
    sum += element;
  }
  return sum / numArray.length;
}

console.log("Numbers Assessment #3:  " + average(scores));