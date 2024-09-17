class Box {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }
}

// const myBox = new Box();

// console.log(myBox);
// console.log('area', myBox.area());

class Prism extends Box {
  constructor(width, length, height) {
    super(width, length); // call the parent constructor method; new Box()

    this.height = height;

    this.volume = this.volume.bind(this);
    this.area = this.area.bind(this);
  }

  area() {
    console.log('inside prisms area()');
  }

  volume() {
    console.log('this', this);
    return this.area() * this.height;
  }
}

const myPrism = new Prism(4, 5, 6);
myPrism.area();
// const myOtherPrism = new Prism(5, 5, 5);

// console.log(myPrism);
// console.log('volume', myPrism.volume()); // 120

// myPrism.volume();
// myOtherPrism.volume();

const volume = myPrism.volume;

volume(); // there is no `this`
// const log = console.log;
