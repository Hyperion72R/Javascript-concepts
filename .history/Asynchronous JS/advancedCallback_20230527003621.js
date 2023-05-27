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
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("the fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log("the machine was started");
          setTimeout(() => {
            console.log(`ice cream was placed on${stocks.holder[0]} `);
            setTimeout(() => {
              console.log(`${stocks.toppings[1]} was added as toppings`);
              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(1, production);
