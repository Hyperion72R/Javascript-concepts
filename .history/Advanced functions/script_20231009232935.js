// console.log("test");

// // Func declaration

// function square(num) {
//   return num * num;
// }

// let x = square(7);

// console.log(x);

// // First Class Func

// function displaySquare(fn) {
//   console.log("Square is " + fn(70));
// }

// y = square(70);

// console.log("                       NEXT");

// displaySquare(square);

// function displaySquare2(fn) {
//   console.log("SquareV2 is " + fn);
// }

// displaySquare2(square(3));

// // IIFE
// console.log("                       NEXT");

// function test(num) {
//   console.time();
//   console.log(`NOW! V${num} `);
//   console.timeEnd();
// }

// test(1);

// (function test2(num) {
//   console.time();
//   console.log(`NOW! V${num} `);
//   console.timeEnd();
// })(2);

// // IIFE Advanced example

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(4);
// })(4);

// // Function Scope

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// Function Hoisting
// HoistingExmpl();
// function HoistingExmpl() {
//   console.log("TEST");
// }
// // HoistingExmpl();

// console.log(x);
// let x = 5;
// // console.log(x);

// Function Hoisting

// var x = 21;

// var fun = function () {
//   console.log(x);
//   var x = 20;
// };

// fun();

// function multiply(num1, num2) {
//   console.log(num1 * num2);
// }
// var arr = [5, 6];

// multiply(...arr);

// function multiplyinf(...nums) {
//   console.log(nums);
// }
// var arr2 = [5, 6];

// multiplyinf(...arr2);

// const fn = (a, x, y, ...numbers) => {
//   console.log(x, y, numbers);
// };

// fn(5, 6, 3, 7, 10, 20);

// function fn2(...nums) {
//   console.log(nums[0] * nums[1]);
// }
// var arr2 = [3, 4];

// fn2(...arr2);

const x1 = (a, b, c, ...rest) => {
  console.log(a, b, c, rest);
};

x1(1, 2, 3);
