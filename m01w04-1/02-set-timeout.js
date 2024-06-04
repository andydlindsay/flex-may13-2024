// async code rule #1: async code cannot run until ALL sync code is done

console.log('1. top of the file');

const myFunc = function() {
  console.log('2. hello world');
};

// long running and non-blocking process (async)
// the function to run
// the length of time to delay in ms
const returnVal = setTimeout(myFunc, 3000); // run the function myFunc after 3 seconds
// console.log(returnVal);

// clearTimeout(returnVal);

// examples of long running operations:
// * reading in a file from the file system
// * making a request to a web server

console.log('3. bottom of the file');

// myFunc() after 1ms
