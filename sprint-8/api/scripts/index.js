// this is the body (HTTP) content
const data = { username: "example", score: 100 };

// fetch()
// parameters
// first -> URL with resource
// second -> configuration (object)

fetch("https://api.example.com/scores", {
  method: "POST", // Specify the method
  headers: {
    "Content-Type": "application/json", // Tell the server we're sending JSON
  },
  body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      // 404 -> NOT FOUND
      // 400 -> data is not good
      // 500 -> the server got an internal error
    }
  })
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
