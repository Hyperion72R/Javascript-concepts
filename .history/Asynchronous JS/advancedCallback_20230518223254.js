let x = 1;

let order = (secondFunc) => {
  console.log("order acceptance");
  if ((x = 1)) secondFunc();
};

function makingFood() {
  console.log("Start making food");
}

order(makingFood);
