// CREATE PERSON CLASS
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.name = lastName;
  }

  greeting() {
    return `${this.firstName} ${this.name} you have to create a gret portfolio`
  }

  static addNeed() {
    return "5000k dollar";
  }
}

// EXtENDS A SUB CLASS
class Customer extends Person {
  constructor(firstName, name, number, age) {
    super(firstName, name);
    this.number = number;
    this.age = age;
  }

  static addNumber(x, y) {
    return x * y;
  }
}

const raihan = new Customer('Raihan', "Ahmad", '555-555-5555', 19);

console.log(Customer.addNeed());