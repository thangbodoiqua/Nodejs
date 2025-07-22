// Node.js program to demonstrate the 
// fs.existsSync() method 

// Import the filesystem module 
const fs = require('fs');

// Get the current filenames 
// in the directory 
getCurrentFilenames();

let fileExists = fs.existsSync('hello.txt');
console.log("hello.txt exists:", fileExists);

fileExists = fs.existsSync('world.txt');
console.log("world.txt exists:", fileExists);

// Function to get current filenames 
// in directory 
function getCurrentFilenames() {
	console.log("\nCurrent filenames:");
	fs.readdirSync(__dirname).forEach(file => {
		console.log(file);
	});
	console.log("\n");
}