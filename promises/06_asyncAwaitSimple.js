function myRandomPromise() {
  return new Promise(function (resolve, reject) {
    const random = Math.random();
    random < 0.5
      ? resolve('Yay, it worked')
      : reject(new Error('Oh no, something went wrong'));
  });
}


async function myFunc() {
  let promiseResult = null;
  try {
    promiseResult = await myRandomPromise();
    console.log(promiseResult);
  } catch (err) {
    console.log(err);
  }
  return promiseResult;
}

myFunc()
  .catch(console.log);
