// // object litarals example
// const person = {
//   name: 'Raihan',
//   age: 19
// }
// console.log(person);

// NEW CONSTRUCTORS INCLUDE THIS KEYWORD WITH ES5
function Person(name, age, bd) {
  this.name = name;
  this.age = age;
  // console.log(this);
  this.bd = new Date(bd);
  this.birthYearCalculator = function () {
    const diff = Date.now() - this.bd.getTime();
    const ageYear = new Date(diff);
    return ageYear.getFullYear() - 1970;
  }
}

const raihan = new Person('Raihan Ahmad', 10, 'april 12, 2001');
const tuhin = new Person('Tuhin Shek', 17, '12-2-2004');

console.log(raihan.birthYearCalculator());