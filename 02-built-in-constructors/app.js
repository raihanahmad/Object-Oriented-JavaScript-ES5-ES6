// ALL PREMITIVE and REFERENCE DATATYPE WITH CONSTRUCTORS

// STRING
const name1 = 'Raihan Ahmad';
console.log(typeof name, name1);

const name2 = new String("Nasim Uddin");
console.log(typeof name2, name2);

if (name2 === 'Nasim Uddin') {
  console.log("YES");
} else {
  console.log('NO');
}

if (name1 === 'Raihan Ahmad') {
  console.log("YES");
} else {
  console.log('NO');
}

// NUMBER
const num1 = 5000;
console.log(typeof num1, num1);

const num2 = new Number(5000);
console.log(typeof num2, num2);

// BOOLEAN
const boll = true;
console.log(boll, typeof boll);

const boll2 = new Boolean(false);
console.log(boll2, typeof boll2);

// FUNCTION
const sum1 = function () {
  return 4 + 5;
}
console.log(sum1(), typeof sum1);

const sum2 = new Function('x', 'y', 'return 1 + 3');
console.log(typeof sum2(), sum2());

// OBJECT
const ob1 = {
  fullName: "Raihan Ahmad"
}
console.log(typeof ob1, ob1);

const ob2 = new Object({
  fullName: 'Nasim Uddin'
});
console.log(ob2, typeof ob2);

// ARRAY
const arr1 = [1, 'Raihan Ahmad'];
console.log(arr1, typeof arr1);

const arr2 = new Array('Nasim Uddin', 1);
console.log(arr2, typeof arr2);

// REGULAR EXPRESSIONS
const regular1 = /\W+/
console.log(regular1, typeof regular1);

const regular2 = new RegExp('\\W+');
console.log(regular2, typeof regular2);