// Promises -> asynchronous

// .then() and .catch()

// async await -> try catch block

async function getBreeds() {
  try {
    // try here
    const response = await fetch("htts://dogapi.dog/api/v2/breeds"); // this triggers an errors
    console.log(await response.json());
    console.log("Hello!");
  } catch (error) {
    console.error("Error: ", error);
  }
}

getBreeds();

// ASYNCHRONOUS CODE

// IS NOOOOOTTTTTTTTTTT WAITING TO FINISH
fetch("https://dogapi.dog/api/v2/breeds")
  .then((response) => console.log("Bananas!"))
  .catch((error) => console.log("We got an error!"));

// NEXT LINE
for (let index = 0; index < 10; index++) {
  console.log("Hello!");
}

// Hello!
// Bananas!
