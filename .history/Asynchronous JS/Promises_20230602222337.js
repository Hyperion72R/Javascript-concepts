let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.Fruits[1]} was selected`);
})
  .then(() => {
    return order(0000, () => {
      console.log(`production has started`);
    });
  })

  .then(() => {
    console.log(`${stocks.liquid[1]} was chopped`);
  })

  .then();
