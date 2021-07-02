const personOne = {
  name: "Kyle",
  age: 24,
  address: {
    city: "Somewhere",
    state: "One of them",
  },
};

const personTwo = {
  name: "Jane",
  age: "18",
  favoriteFood: "peach",
  address: {
    city: "Certain place",
    state: "Distant location",
  },
};

const personThree = {
  name: "Sally",
  //   age: 32,
  favoriteFood: "Watermelon",
  address: {
    city: "Somewhere else",
    state: "Another one of them",
  },
};

const {
  name: firstName,
  address: { ...street },
} = personTwo;

console.log(firstName);
// console.log(rest.age);
console.log(street);

console.log(personThree);

const personFour = { ...personTwo, ...personThree };

console.log(personFour);

console.warn("TEST");

function printUser(user) {
  for (let i = 0; i < user.length; i++) {
    console.log(user[i].name);
    console.log(user[i].age);
  }
}

x = [personOne, personTwo, personThree];

printUser(x);

// console.log(x[1].name);

console.warn("SECOND FUNCTION");

function printUser2(user) {
  console.log(`Name is: ${user.name}. Age is ${user.age}`);
}

const { ...x1 } = personOne;
const { ...x2 } = personTwo;
const { ...x3 } = personThree;

printUser2(x1);
printUser2(x2);
printUser2(x3);

console.warn("THIRD FUNCTION");

function printUser3({ ...x }) {
  console.log(`Name is: ${x.name}. Age is ${age}`);
}

printUser3(personOne);
printUser3(personTwo);
printUser3(personThree);
