const users = [{id: 1, name: 'John Doe', isLoggedIn: false}];
const getUserAsync = id => Promise.resolve(users.find(user => user.id === id));

getUserAsync(1)
  .then(user => {
    if (!user.isLoggedIn) {
      throw new Error('User is not logged in');
    }
    return user;
  })
  .catch(console.log);


// getUserAsync(1)
//   .then(user => {
//     if (!user.isLoggedIn) {
//       return Promise.reject('REJECTED: User is not logged in');
//     } else {
//       throw new Error('User is logged in');
//     }
//   })
//   .catch(console.log);
