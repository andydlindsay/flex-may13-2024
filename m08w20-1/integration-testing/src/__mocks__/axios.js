const data = [
  {
    id: 1,
    name: 'Alice',
    points: 15,
  },
  {
    id: 2,
    name: 'Bob',
    points: 10,
  },
  {
    id: 3,
    name: 'Carol',
    points: 5,
  },
]

const axios = {
  get: (url) => {
    // return new Promise((resolve, reject) => {
    //   resolve([])
    // });

    // if (url === '/photos') {
    //   // return fake photo info
    // }

    // if (url === '/topics') {
    //   // return fake topic data
    // }

    return Promise.resolve({
      data: data
    })
  }
};

export default axios;
