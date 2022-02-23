/*
const fs = require('fs');
fs.open('fileExample.txt', 'w', (err, file) => {
  if (err) {
    throw err;  
  }
  console.log('The file has been created!');
});
*/
const fs = require('fs');
fs.appendFile('fileExample.txt', 'Goodbye!', (err) => {
  if (err) {
    throw err;
  }
  console.log('File updated successfully!');
});