var fs = require('fs'); 
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) { // for update
  if (err) throw err;
  console.log('Saved!');
})

fs.open('mynewfile2.txt', 'w', function (err, file) { // flag w for writing
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) { // for update
  if (err) throw err;
  console.log('Saved!');
});

// for delete file from system 
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

// rename fileSize
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});