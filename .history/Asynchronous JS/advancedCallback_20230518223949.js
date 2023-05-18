let payment = true;

let order = (secondFunc) => {
  console.log("order acceptance");

  if (payment == true) {
    secondFunc();
  }
};

function makingFood() {
  console.log("Start making food");
}

order(makingFood);
