process.stdin.on('data', (data) => {
  console.log('you typed:', data);
});

process.stdin.setEncoding('utf-8');
