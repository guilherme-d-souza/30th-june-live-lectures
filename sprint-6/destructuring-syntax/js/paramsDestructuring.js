function getOlder(person = {}, text = "awesome!") {
  console.log(person.username + " next age will be", person.age + 1);
  console.log("This is " + text);
  // return person.age + 1;
}

// destructuring
// ({}) => // arrow
// function name({}) // named
// ({}) {} // anonymous
//                                    person         , text
function getOlderDestructuring({ username, age = 18 }, text = "awesome!") {
  console.log(username + " next age will be", age + 1);
  console.log("This is " + text);
}

const person = {
  username: "Ronald",
  age: 42,
};

const value = getOlderDestructuring(person);
// console.log("Returned value from getOlder function: ", value);
