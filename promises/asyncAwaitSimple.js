function myRandomPromise() {
  return new Promise(function (resolve, reject) {
    const random = Math.random();
    random < 0.5
      ? resolve('Yay, it worked')
      : reject('Oh no, something went wrong');
  })
}


void async function myFunc() {
  let promiseResult = null;
  try {
    let promiseResult = await myRandomPromise();
    console.log(promiseResult);
  } catch (err) {
    console.log(err);
  }
  return promiseResult;
}();
