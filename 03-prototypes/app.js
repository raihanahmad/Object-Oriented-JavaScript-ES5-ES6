// PRESON CONSTRUCTORS FOR LEARN PROTOTYPE
function Person(firstName, lastName, age, bd) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  // console.log(this);
  this.bd = new Date(bd);
  // this.birthYearCalculator = function () {
  //   const diff = Date.now() - this.bd.getTime();
  //   const ageYear = new Date(diff);
  //   return Math.abs(ageYear.getUTCFullYear() - 1970);
  // };
}

// PROTOTYPE FOR BIRTH YEAR
Person.prototype.birthYearCalculator = function () {
  const diff = Date.now() - this.bd.getTime();
  const ageYear = new Date(diff);
  return Math.abs(ageYear.getUTCFullYear() - 1970);
};

// PROTOTYPE FOR FULNAME
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// PROTOTYPE FOR BIRTH YEAR
Person.prototype.getMaried = function (newLastName) {
  this.lastName = newLastName;
};

Object.prototype.hasOwnProperty(Person);

const polash = new Person("Polash", "Ahmad", "20", "10-20-98");
const raihan = new Person("Raihan", "Ahmad", "19", "april 12, 2001");

console.log(polash.getFullName());

polash.getMaried("Maried");

console.log(polash.getFullName());

console.log(polash.hasOwnProperty("firstName"));
console.log(polash.hasOwnProperty("getMaried"));
