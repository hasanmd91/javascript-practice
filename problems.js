// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const date = new Date();
const today = date.getDate();
const day = date.getDay();
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const time = date.getHours();

const dayDetails = "today is: " + daylist[day];

console.log(dayDetails);

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const prepand = hours >= 12 ? "PM" : "AM";

console.log(`current Time is:${hours} ${prepand}:${minutes}:${seconds}`);

// 2.  Write a JavaScript program to print the contents of the current window.

const printCurrentPage = () => {
  window.print();
};

// 3. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
const a = 5;
const b = 6;
const c = 7;

const semipera = (a + b + c) / 2;

const area = Math.sqrt(
  semipera * ((semipera - a) * (semipera - b) * (semipera - c))
);

// write a function to determine wether a year is leap year

const leapyear = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

console.log(leapyear(2023));

// first step chech with 100 if % = 0 divide by 400 % =0 true

// second  step chech with 100 if % != 0 divide by 4 % =0  true

for (year = 1900; year <= 2050; year++) {
  const c = new Date(year, 7, 31);
  if (c.getDay() === 0) {
    console.log(year);
  }
}
//Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

const submit = (e) => {
  e.preventDefault();
};

const multiplyBy = () => {
  console.log("hasan");
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("seconeNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
};

const dividedBy = () => {
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("seconeNumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
};

// Write a JavaScript program to calculate days left until next Christwrite java script program to calculöate