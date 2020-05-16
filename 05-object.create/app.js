// CREATE A OBJECT
const person = {
  info: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },

  getMaried: function (newLastName) {
    this.lastName = newLastName;
  }
}

// ONWAY
const brad = Object.create(person);
brad.firstName = 'Brad';
brad.lastName = 'Traversy';

console.log(brad.info());

// ANOTHER WAY
const raihan = Object.create(person, {
  firstName: {
    value: 'Raihan'
  },
  lastName: {
    value: 'Ahmad'
  }
});

console.log(raihan.info());