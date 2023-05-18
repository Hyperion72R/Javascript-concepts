let x = 1;

let order = (secondFunc) => {
  console.log("order acceptance");
  secondFunc();
};

function makingFood() {
  console.log("Start making food");
}

order(makingFood);
