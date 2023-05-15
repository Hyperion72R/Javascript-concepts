console.log("TEST");

function sum(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

let isPositive2 = (number) => number >= 0;

let randomNumber2 = () => Math.random;

document.addEventListener("click", function () {
  console.log("Click");
});

document.addEventListener("click", () => console.log("Click"));

console.warn("THIS KEYWORD");

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function: " + this.name);
    }, 100);
  }
}