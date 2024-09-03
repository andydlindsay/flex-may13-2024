// // React components were objects (class-based)
// class Counter {
//   constructor() {
//     // setup initial data
//     this.counter = 0;
//   }

//   increment() {
//     this.counter++;
//     console.log(this.counter);
//   }
// }

// const myCounter = new Counter();

// // console.log(myCounter);
// myCounter.increment();
// myCounter.increment();
// myCounter.increment();
// myCounter.increment();
// myCounter.increment();

// functions have no memory
// closure means that a function remembers its original scope

let counter = 0; // 1
let username = 'alice';

const increment = () => {
  counter++;
  console.log(counter);
};

increment();
increment();
increment();
increment();
increment();

const hof = () => {
  let username = 'alice';

  return () => {
    console.log(username);
  };
};
