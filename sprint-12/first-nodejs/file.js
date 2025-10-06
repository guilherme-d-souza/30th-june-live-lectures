const fs = require("fs");

const content = "This is the content of the file.";

// Asynchronously write to a file
fs.writeFile("newFile.txt", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been written successfully!");
});
