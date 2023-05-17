function one(call_two) {
  console.log(" step 1 complete. please call step 2");
  call_two();
}

function two() {
  console.log(" step 2");
}

one(two);

function three() {
  console.log(" step 3");
}

function four() {
  console.log(" step 4");
}

three(four());
