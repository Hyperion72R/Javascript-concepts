const personOne = {
  name: "Kyle",
  age: 24,
  address: {
    city: "Somewhere",
    state: "One of them",
  },
};

const personTwo = {
  name: "Sally",
  //   age: 32,
  favoriteFood: "Watermelon",
};

// const {
//   name: firstName,
//   address: { ...street },
// } = personTwo;

// console.log(firstName);
// console.log(rest.age);
// console.log(street);

const personThree = { ...personOne, ...personTwo };

console.log(personThree);
