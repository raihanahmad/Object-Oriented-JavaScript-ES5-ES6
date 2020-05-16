// ES6 CLASSES
class Person {
  constructor(firstName, lastName, bod) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(bod);
  }

  greeting() {
    return `${this.firstName} ${this.lastName} You have to more work and make some great project and a great portfolio`;
  }

  // AGE TO YEAR CALCULATOR
  yearCalculator() {
    const diff = Date.now() - this.birthday.getTime();
    const age = new Date(diff);

    return Math.abs(age.getUTCFullYear()) - 1970;
  }

  getMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumber(x, y) {
    return x * y;
  }

}

const selina = new Person('Selina', "Gomez", 'april 4 2001');

selina.getMarried('Biver');

console.log(Person.addNumber(4, 5));