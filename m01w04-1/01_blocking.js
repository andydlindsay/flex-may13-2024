console.log('top of the file');

// long running and blocking process
for (let i = 0; i < 100000; i++) {
  const date = new Date();
  console.log(date);
}

console.log('bottom of the file');
