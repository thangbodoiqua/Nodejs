const e = require("express");
const fs = require("fs");

console.log("deleting an existing file");
fs.unlink("input.txt", function (err) {
	if (err) {
		return console.error(err);
	}
	console.log("File deleted successfully!");
});