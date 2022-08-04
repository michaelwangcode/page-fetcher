// Saves the contents of a webpage to a file
// Example: > https://example.edu/ text.txt

// Import request library
const request = require('request');

// Import fs (file system) library
const fs = require('fs');

// Save the URL and localFilePath
const myArgs = process.argv.slice(2);
let myUrl = myArgs[0];
let localFilePath = myArgs[1];

// Set the bytes to 0
let bytes = 0;


// download the url to a local file on your computer

// user the request library
// use async functions


// Get the source code for a web page (example.edu)
request(myUrl, (error, response, body) => {

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the web page


  // Save the web page in a text file (example: text.txt)
  fs.writeFile(`./${localFilePath}`, body, err => {
    if (err) {
      console.error(err);
    }

    // Save file size
    bytes = body.length;

    // Print success messages
    console.log("File written successfully");
    console.log(`Downloaded and saved ${bytes} bytes to ${localFilePath}`);
  });

});






