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
  age: 32,
  favoriteFood: "Watermelon",
  address: {
    city: "Somewhere else",
    state: "Another one of them",
  },
};

const { name: firstName, age = "18", favoriteFood = "Rice" } = personTwo;

console.log(firstName);
console.log(age);
console.log(favoriteFood);
