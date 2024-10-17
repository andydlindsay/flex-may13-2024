// if it looks like a duck, and walks like a duck, and quacks like a duck, then it's probably a duck

interface LoginUser {
  email: string;
  password: string;
}

const login = (user: LoginUser): boolean => {
  return false;
};

const myUser = {
  email: 'jstamos@stamos.com',
  password: '1234',
  moreStuff: [],
};

login(myUser);
