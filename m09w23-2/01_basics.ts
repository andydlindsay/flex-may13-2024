let username: string | number | boolean = 'alice';
username = 'bob';
username = 42;
username = true;

const numbers: (number | boolean)[] = [];
numbers.push(4);
numbers.push(true);
// numbers.push('hello');

const result = numbers.pop();
