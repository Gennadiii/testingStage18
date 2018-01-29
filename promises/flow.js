//latentflip.com/loupe/

console.log('START');

setTimeout(function iAmTheFastest() {
	console.log('I am the fastest');
}, 1000);

function func1(myVar) {
	return new Promise(function(resolve, reject) {
		console.log('Promise start');
		setTimeout(function thisIsPromise() {
			myVar ? resolve(myVar) : reject('Rejected');
		}, 10 * 1000);
		console.log('Promise end');
	});
}

func1(1);

setTimeout(function asyncEnd() {
	console.log('Async end');
}, 2000);

console.log('END');
