let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = false;

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

// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping would you love? "));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log(" A ");
//   console.log(" B ");
//   console.log(" C ");

//   await toppings_choice();

//   console.log(" D ");
//   console.log(" E ");
// }

// kitchen();

// console.log("doing the dishes ");
// console.log("cleaning the table ");
// console.log("taking others orders ");

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve(console.log("work")), ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    time(1000);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

kitchen();
