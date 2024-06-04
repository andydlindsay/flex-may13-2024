const higherOrderFunc = function(callback) {
  let data = null;

  console.log('1. above the setTimeout call');
  
  setTimeout(function() {
    // the long running process has finished
    console.log('3. inside the setTimeout');
    data = 'hello world';
    callback(data);
  }, 3000);

  console.log('2. below the setTimeout call');
};

console.log('5. above the main call');

const returnVal = higherOrderFunc(function(data) {
  console.log('yay we have the data', data); // "hello world"
  console.log('4. inside the callback function');
});

console.log('returnVal', returnVal); // null

console.log('6. below the main call');
