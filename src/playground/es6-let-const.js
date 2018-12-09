var nameVar = 'Fabien';
var nameVar = 'Roger';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping
const fullName = 'Donald Trump'
let firstName;
if (fullName) {
  firstName = fullName.split(' ')[0];
  // const firstName = fullName.split(' ')[0];
  console.log(firstName);
}
console.log(firstName);