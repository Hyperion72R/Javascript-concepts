let x = "y";

let order = (secondFunc) => {
  console.log("order acceptance");
  if ((x = "x")) {
    secondFunc();
  }
};

function makingFood() {
  console.log("Start making food");
}

order(makingFood);
