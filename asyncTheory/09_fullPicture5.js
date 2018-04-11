const arr = [1, 2, 3, 4];

Array.prototype.asyncForEach = function (callback) {
  this.forEach(function (element, index, arr) {
    setTimeout(function () {
      callback(element, index, arr)
    }, 0); // this doesn't mean it would run after 0 delay
  });
};

function fib(num) {
  if (num < 2) return 1;
  return fib(num - 2) + fib(num - 1);
}

Promise.resolve()
  .then(_ => fib(42));

function syncLog(element) {
  console.log('Sync ' + element);
}

function asyncLog(element) {
  console.log('Async ' + element);
}

arr.asyncForEach(asyncLog);
arr.forEach(syncLog);