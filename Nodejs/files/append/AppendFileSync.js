
const fs = require('fs');

fs.appendFileSync('input.txt', 'Appending some data')

fs.readFile('input.txt', function (err, data) {
    if (err) console.error(err);
    else console.log('File contents: ' + data.toString());
});