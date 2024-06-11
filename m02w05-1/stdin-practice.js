// listen for information coming in from standard in (stdin)
process.stdin.on('data', (data) => {
  console.log('you typed:', data);
});

process.stdin.setEncoding('utf-8');
