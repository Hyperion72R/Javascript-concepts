console.log("test");

// Func declaration

function square(num) {
  return num * num;
}

let x = square(7);

console.log(x);

// First Class Func

function displaySquare(fn) {
  console.log("Square is " + fn(70));
}

y = square(70);

console.log("NEXT");

displaySquare(square);

function displaySquare2(fn) {
  console.log("SquareV2 is " + fn);
}

displaySquare2(square(3));

// IIFE

function test() {
  console.log("NOW!");
}

console.time(test());
