const person = {
  name: "Guilherme",
  age: 27,
  wings: 0,
  wallet: null,
  microphone: undefined,
};

// object.hasOwnProperty("propertyName")
const haveWings = person.hasOwnProperty("wings");

console.table(person);
console.log("the person object has wings?", haveWings);

// 'propertyName' in object

const haveWallet = "wallet" in person;

console.table(person);
console.log("the person object has wallet?", haveWallet);

// THIS IS NOT GUARATEEND
// const haveMic = person.microphone === undefined;
