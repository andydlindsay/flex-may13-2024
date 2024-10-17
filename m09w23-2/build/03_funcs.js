"use strict";
// name of the function, what arguments does it take, what does it return?
const sayHello = (name, age) => {
    return `hello there ${name}`;
};
let result2 = sayHello('alice', 42);
const returningPromise = (str) => {
    return new Promise((resolve) => {
        resolve('hello world');
    });
};
returningPromise('hello').then((data) => { });
const myWriter = {
    penName: 'richard bachman',
    realName: 'stephen king',
    writeBook: (title) => {
        return true;
    }
};
const higherOrderFunc = (cb) => { };
higherOrderFunc((num, str) => { return null; });
