function square(x) {
  return x*x;
};
console.log(square(8));

const squareArrow = (x) => {
  return x*x;
};
console.log(squareArrow(7));

const sqr = (x) => x*x;
console.log(sqr(6));

// Challenge
const getFirstName = (fullName) => fullName.split(" ")[0];
console.log(getFirstName("Donald Trump"));