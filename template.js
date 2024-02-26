const first = "SubhanAllah";
const last = "Alhamdulillah";
const greet = "Allahuakber";

const name = first + " " + last + " " + greet;
console.log(name);

const a = 10;
const b = 20;

const result = "The sum of " + a + " and " + b + " is " + (a + b);
console.log(result);

//or
//const math = `The sum of ${a} and ${b} is ${a + b}`;
//console.log(math);

const numbers = [45, 49, 98, 78];
const students = { name: "june", age: 5 };
const math = `The sum of ${numbers[0]} and ${students.age} is ${
  numbers[0] + students.age
}`;
console.log(math);

const email = "Hi john \n" + "cena cena lage \n" + "tumi mara mari korba naki";

console.log(email);

const challenge = `Hi john 
cena cena naki ochena 
mair dimu prochur`;

console.log(challenge);
