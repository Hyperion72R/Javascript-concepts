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

let order = (call_production) => {
  console.log("order placed, please call production");
  call_production();
};

let production = () => {
  console.log("order received, starting production");
};

order(production);
