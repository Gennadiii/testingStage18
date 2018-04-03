// How to generate errors

const users = [{id: 1, name: 'John Doe', isLoggedIn: false}];
const getUserAsync = id => Promise.resolve(users.find(user => user.id === id));

getUserAsync(1)
  .then(user => {
    if (!user.isLoggedIn) {
      throw new Error('Synchronous error');
    }
    return user;
  })
  .catch(console.log);


getUserAsync(1)
  .then(user => {
    if (!user.isLoggedIn) {
      return Promise.reject(new Error('REJECTED with Promise.reject'));
    }
    return user;
  })
  .catch(console.log);
