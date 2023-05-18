let ds = "y";

let order = (secondFunc) => {
  console.log("order acceptance");
  if ((ds = "x")) {
    secondFunc();
  }
};

function makingFood() {
  console.log("Start making food");
  console.log(ds);
}

order(makingFood);
