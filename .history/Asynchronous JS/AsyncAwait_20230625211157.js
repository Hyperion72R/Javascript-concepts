let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

// let order = () =>{

//     return new Promise( (resolve, reject)=>{
// if(true){
// resolve()
// }
// else{
//     reject()
// }
//     })
// }

// order().then().then().catch().finally()

// async function order() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc doesn't exist", error);
//   } finally {
//     console.log("runs code anyways");
//   }
// }

// order().then(() => {
//   console.log("Test");
// });

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("which topping would you love? ");
    }, 3000);
  });
};

async function kitchen() {
  console.log(" A ");
  console.log(" B ");
  console.log(" C ");

  await toppings_choice();

  console.log(" D ");
  console.log(" E ");
}

kitchen();

console.log("doing the dishes ");
console.log("cleaning the table ");
console.log("taking others orders ");
