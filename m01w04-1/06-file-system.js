const fs = require('fs');

// const fileContents = fs.readFileSync('./example.html', { encoding: 'utf-8' }); // blocking

// console.log('fileContents', fileContents);

const namedFunc = function(err, fileContents) {
  // console.log('err', err);
  if (err !== null) {
    // something bad happened
    console.log('ooops', err);
  } else {
    // happy path! no error
    console.log('fileContents', fileContents);
  }
}

fs.readFile('./example.html', { encoding: 'utf-8' }, namedFunc);

console.log('bottom of the file');
