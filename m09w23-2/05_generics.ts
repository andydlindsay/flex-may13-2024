interface Container<T> {
  name: string;
  contents: T;
}

const strContainer: Container<string> = {
  name: 'string container',
  contents: 'hello world',
};

const boolContainer: Container<boolean> = {
  name: 'boolean container',
  contents: true,
}