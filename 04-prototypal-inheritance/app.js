// PERSON CONSTRUCTOR
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// CREATE A PERSON PROTOTYPE
Person.prototype.greeting = function () {
  return `${this.firstName} ${this.lastName} You Have To So Much`;
}

const person1 = new Person('Raihan', "Ahmad", 19);
console.log(person1.greeting());

// CUSTOMAR CONSTRUCTOR
function Customer(firstName, lastName, age, number, membership) {
  // INCLUDE PERSON CONSTRUCTOR IN THIS CONSTRUCTOR
  Person.call(this, firstName, lastName, age);

  this.number = number;
  this.membership = membership;
}

// INHERITE PERSON PROTOTYPE IN CUSTOMER PROTOTYPE
Customer.prototype = Object.create(Person.prototype);

// PROTYPE CHANGE TO CUSTOMER
Customer.prototype.constructor = Customer;

// // CREATE ANOTHER PROTOTYPE IN CUSTOMER CONSTRUCTOR
// Customer.prototype.greeting = function () {
//   return `${this.firstName} ${this.lastName} you should learn something with your brother`;
// }

const customer1 = new Customer('Tuhin', 'Ahmad', '16', '555-555-5555', 'PRO');
console.log(customer1);

console.log(customer1.greeting());