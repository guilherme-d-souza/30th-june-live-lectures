const fs = require("fs");

// Asynchronously write to a file
const content = fs.readFileSync("newFile.txt", { encoding: "utf8" });

console.log(content);
