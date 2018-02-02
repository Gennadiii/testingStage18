//latentflip.com/loupe/

console.log('SYNC START');

setTimeout(function iAmTheFastest() {
	console.log('I am the fastest async');
}, 1000);

function func1(myVar) {
	return new Promise(function(resolve, reject) {
		console.log('Sync Promise start');
		setTimeout(function thisIsPromise() {
			myVar ? resolve(myVar) : reject('Rejected');
		}, 10 * 1000);
		console.log('Sync Promise end');
	});
}

func1("I'm from promise")
	.then(console.log);

setTimeout(function asyncEnd() {
	console.log('Async end');
}, 2000);

console.log('SYNC END');
