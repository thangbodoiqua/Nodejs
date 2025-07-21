
const fs = require('fs');

fs.appendFile('input.txt', 'Appending some data', function (error) {
    if (error) console.error(error);
    else { 
        console.log('data appended successfully!');

        fs.readFile('input.txt', function (err, data) {
            if (err) console.error(err);
            else console.log('File contents: ' + data.toString());
        });
    }
 })