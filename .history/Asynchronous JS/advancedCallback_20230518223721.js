let ds = "y";

let order = (secondFunc) => {
  console.log("order acceptance");
  secondFunc();
};

function makingFood() {
  console.log("Start making food");
  if ((ds = "x")) console.log(ds);
}

order(makingFood);
