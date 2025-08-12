// objects
// representations of something that exists
// curly brackets
let person = {
  name: "Guilherme",
  birth_date: "10/22/1997",
  height: 1.8, // meters
  weight: 90.0, // kg
  ssn: "123-123-123-123",
  personality: "Happy and like sports",
};

// Spots project
let person_spots = {
  image: "./images/bessie.png",
  name: "Bessie Coleman",
  job_description: "Civil Aviator",
  hobbies: [
    { name: "Surf", description: "I like surfing in the weekends" },
    { name: "Surf", description: "I like surfing in the weekends" },
    { name: "Surf", description: "I like surfing in the weekends" },
    { name: "Surf", description: "I like surfing in the weekends" },
    { name: "Surf", description: "I like surfing in the weekends" },
  ],
};

// accessing values.
console.log("Person image: ", person_spots.image);
