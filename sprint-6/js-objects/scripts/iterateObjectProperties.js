const myObject = { a: 1, b: 2, c: 3 };

// for const propertyNameValue
// this is a for...in
// ['a', 'b', 'c']
for (const property in myObject) {
  console.log(`${property}: ${myObject[property]}`);
}

// Object is a global stuff from JS
// Object.keys(person)
const propertiesArray = Object.keys(myObject);

console.log(propertiesArray);

Object.keys(myObject).forEach((property) => console.log(property));
