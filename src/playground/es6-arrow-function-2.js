// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}
console.log(add(55,1, 1001));

// this keyword - no longer bound

const user = {
  name: 'Fabien',
  cities: ['Paris', 'London', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lives in ' + city);
  }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  numbers: [1,2,3,4],
  multiplyBy: 6,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy)
  }
}

console.log(multiplier.multiply());