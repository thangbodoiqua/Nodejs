const fs = require("fs");

// Asynchronous - Opening File
console.log("opening file!");
fs.open("input.txt", "r+", function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File open successfully");
    console.log("file descriptor is: " + fd);
    
    // Close the opened file.
    fs.close(fd, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("File closed successfully.");
    });

});
