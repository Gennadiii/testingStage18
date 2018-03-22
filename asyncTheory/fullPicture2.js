//latentflip.com/loupe/

function fib(num) { // Don't block the stack
    if (num < 2) return 1;
    return fib(num - 2) + fib(num - 1);
}

console.log("I'm synchronous 1");
setTimeout(function func1() {
  console.log("I'm async function 1");
}, 500);
setTimeout(function func2() {
  console.log("I'm async function 2");
}, 1000);
console.log("I'm synchronous 2");
setTimeout(function func3() {
  console.log("I'm async function 3");
}, 150);
fib(42);
// fib(2); // loupe
console.log("I'm synchronous 3");