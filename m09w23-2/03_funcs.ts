// name of the function, what arguments does it take, what does it return?

const sayHello = (name: string, age?: number): string => {
  return `hello there ${name}`;
};

let result2 = sayHello('alice', 42);

const returningPromise = (str: string): Promise<string> => {
  return new Promise((resolve) => {
    resolve('hello world');
  });
};

returningPromise('hello').then((data) => {})

interface Writer {
  penName: string;
  realName: string;
  writeBook: (title: string) => boolean;
}

const myWriter: Writer = {
  penName: 'richard bachman',
  realName: 'stephen king',
  writeBook: (title: string) => {
    return true;
  }
};

const higherOrderFunc = (cb: (num: number, str: string) => null) => {};

higherOrderFunc((num, str) => { return null; })
