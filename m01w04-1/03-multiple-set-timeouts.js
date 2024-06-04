setTimeout(function() {
  console.log('2. inside the second timeout');
}, 2000); // 2s

setTimeout(function() {
  console.log('1. inside the first timeout');
}, 1000); // 1s

for (let i = 0; i < 100000; i++) { // 4000ms or 4s
  const date = new Date();
  console.log(date);
}

// async code will run after all sync code is finished
