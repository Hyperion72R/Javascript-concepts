console.log("test");

// Func declaration

function square(num) {
  return num * num;
}

let x = square(7);

console.log(x);

// First Class Func

function displaySquare(fn) {
  console.log("Square is " + fn());
}

displaySquare(square(7));
console.log("NEXT");
console.log(displaySquare);
