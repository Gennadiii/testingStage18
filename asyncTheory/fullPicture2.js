//latentflip.com/loupe/

let arr = [1, 2, 3, 4];

Array.prototype.asyncForEach = function (callback) {
  this.forEach(function (element, index, arr) {
    setTimeout(function () {
      callback(element, index, arr)
    }, 0);
  });
};

function syncLog(element) {
  console.log('Sync ' + element);
}

function asyncLog(element) {
  console.log('Async ' + element);
}


arr.asyncForEach(asyncLog);

arr.forEach(syncLog);