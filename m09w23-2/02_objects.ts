interface Pet {
  name: string;
  breed: string;
}

interface MyObj {
  id?: number;
  username: string;
  age: number;
  pet: Pet;
}

const myObj2: MyObj = {} as MyObj;

const myObjArr: MyObj[] = [];

const myObj: MyObj = {
  // id: 1,
  username: 'alice',
  age: 42,
  pet: {
    name: 'benji',
    breed: 'dog',
  }
};
