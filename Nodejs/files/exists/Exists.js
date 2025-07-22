const fs = require('fs');
 
// Using fs.exists() method
fs.exists('/etc/passwd', (exists) => {
  console.log(exists ? 'Found' : 'Not Found!');
});

