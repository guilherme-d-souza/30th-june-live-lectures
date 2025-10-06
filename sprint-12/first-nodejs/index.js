// THIS IS THE BACKEND

const http = require("http"); // 1. Import the http module

// 2. Create a server object
const server = http.createServer((request, response) => {
  // req: request object (what the client is asking for)
  // res: response object (what we send back)

  // 3. Send a response
  response.statusCode = 200; // OK
  response.setHeader("Content-Type", "application/json");
  const message = { message: "Hello World! This is Guilherme!" };
  const stringMessage = JSON.stringify(message); // CONVERTS JS OBJECT to STRINGS

  console.log("js --->", message);
  console.log("string --->", stringMessage);

  response.end(stringMessage); // End the response and send this text
});

// 4. Start listening for requests
server.listen(3001, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3001/");
});
