// let payment = true;

// let order = (secondFunc) => {
//   console.log("order acceptance");
//   if (payment == true) {
//     secondFunc();
//   }
// };

// function makingFood() {
//   console.log("Start making food");
// }

// order(makingFood);

// 2 Example

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
  }, 2000);

  call_production();
};

let production = () => {
  setTimeout(console.log("X"), 3000);
};

order(1, production);
