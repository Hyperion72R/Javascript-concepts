let x = 0;

let order = (secondFunc) => {
  console.log("order acceptance");
  if ((x = 0)) {
    secondFunc();
  }
};

function makingFood() {
  console.log("Start making food");
}

order(makingFood);
