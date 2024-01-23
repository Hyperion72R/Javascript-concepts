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

// const x1 = (a, b, c, ...rest) => {
//   console.log(a, b, c, rest);
// };

// x1(1, 2, 3, 4, 5, 6, 7);

// Callback function

// document.addEventListener("click", function (params) {});

// Arrow functions

// const add = function (firstNum, secondNum) {
//   console.log(firstNum + secondNum);
// };

// const add2 = (firstNum, secondNum) => {
//   console.log(firstNum + secondNum);
// };

// add(1, 2);
// add2(1, 2);

// difference norm func vs arrow

// function square(num) {
//   return num * num;
// }

// const square2 = (num) => {
//   return num * num;
// };

// const square3 = (num) => num * num;

// function fn() {
//   console.log(arguments);
// }

// fn(1, 2, 3);

// this keyword
// let username = "tester2";

// let user = {
//   username: "tester",
//   rc1: () => {
//     console.log("Subscribe to " + this.username);
//   },
//   rc2() {
//     console.log("Subscribe to " + this.username);
//   },
// };

// user.rc1();
// user.rc2();

// Closures

// lexical scope

// var name = "test";
// // global scope

// function local() {
//   // local scope

//   console.log(name);
//   var name2 = "test2";
// }

// local();

// console.log(name2);

// function subscribe() {
//   var name = "Roadside Coder";
//   function displayName() {
//     alert(name);
//   }
//   displayName();
// }

// subscribe();

// function makeFunc() {
//   var name = "Mozilla";
//   function displayName(num) {
//     console.log(name, num);
//   }
//   return displayName;
// }

// makeFunc()(5);

// Closure Scope Chain

// var username = "Test";

// function makeFunc() {
//   var name = "Mozilla";
//   function displayName(num) {
//     console.log(name, num, username);
//   }
//   return displayName;
// }

// makeFunc()(7);

// const e = 10;
// let x = function sum(a) {
//   return function sum2(b) {
//     return function sum3(c) {
//       // outer functions scope
//       return function sum4(d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// };

// console.log(x(1)(2)(3)(4));

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })();

// var addSix = function (x) {
//   var y;
//   createBase = function (z) {
//     console.log(z);
//     y = z;
//   };
//   createBase(4);
//   console.log(y + x);
// };

// addSix(7);

// console.log("2Exp");

// function createBase2(num) {
//   return function (innerNum) {
//     console.log(innerNum + num);
//   };
// }

// var addSix2 = createBase2(4);

// addSix2(7);

// createBase2(4)(7);

// function find() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find();
// console.time("6");
// closure(6);
// console.timeEnd("6");
// console.time("50");
// closure(50);
// console.timeEnd("50");

// normal ver
// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i);
//   }, i * 1000);
// }

// let ver
// for (let i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i);
//   }, i * 1000);
// }

// 2 var ver
// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }

//   inner(i);
// }

// Private counter

// function counter() {
//   var _counter = 0;

//   function add(increment) {
//     _counter += increment;
//   }

//   function retrive() {
//     return "Counter = " + _counter;
//   }

//   return { add, retrive };
// }

// var c = counter();

// c.add(7);
// c.add(7);
// console.log(c.retrive());

// Module Pattern

// var Module = (function () {
//   function privateMethod() {
//     // do something
//     console.log("private");
//   }

//   return {
//     publicMethod: function () {
//       console.log("public");
//     },
//   };
// })();

// Module.publicMethod();

// Module.privateMethodd();

// let view;

// function RunOnlyOnce() {
//   let called = 0;

//   return function () {
//     if (called > 0) {
//       console.log("Already run");
//     } else {
//       view = "Test One";
//       console.log("This is", view);
//       called++;
//     }
//   };
// }

// let IsRunnig = RunOnlyOnce();
// IsRunnig();
// IsRunnig();
// IsRunnig();

// Once Polyfill

// function once(func, context) {
//   let ran;

//   return function () {
//     if (func) {
//       ran = func.apply(context || this, arguments);
//       func = null;
//     }

//     return ran;
//   };
// }

// const hello = once((a, b) => console.log("hello", a, b));

// hello(1, 2);
// hello();
// hello();

// Implement Caching/Memoize Function

// function myMemoize(fn, context) {
//   const res = {};
//   return function (...args) {
//     var argsCache = JSON.stringify(args);
//     if (!res[argsCache]) {
//       res[argsCache] = fn.call(context || this, ...args);
//     }
//     return res[argsCache];
//   };
// }

// // res = {
// //   "5,6":30
// // }

// const clumsysquare = (num1, num2) => {
//   for (let index = 1; index < 100000000; index++) {}
//   return num1 * num2;
// };

// const memoizedClum = myMemoize(clumsysquare);

// console.time("First call");
// console.log(memoizedClum(9467, 7649));
// console.timeEnd("First call");

// console.time("First call");
// console.log(memoizedClum(9467, 7649));
// console.timeEnd("First call");

// Difference between Closure and scope
// #####################################################
// closure -> func with another func, inner func is the closures, if last func return we can use variables at later time

// scope -> define what variable we have access to. We have global scope and local scope
// #####################################################
// Currying

// function f(a,b) {
//   console.log(a,b)
// }

// function f(a) {
//   return function (b) {
//     console.log(a, b);
//   };
// }

// function f(a) {
//   return function (b) {
//     return `${a} ${b}`;
//   };
// }

// console.log(f(5)(7));

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       let x = a + b + c;
//       return x;
//     };
//   };
// }

// console.log(sum(1)(2)(3));

function evaluate(sum, substract, multiply) {
  return function (num1) {
    return function (num2) {
      sum || substract || multiply;
      if (sum == "sum") {
        return num1 + num2;
      } else if (substract == "substract") {
        return num1 - num2;
      } else if (multiply == "multiply") {
        return num1 * num2;
      } else console.log("error");
    };
  };
}

console.log(evaluate("multiply")(2)(2));
