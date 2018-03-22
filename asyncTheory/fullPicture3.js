//latentflip.com/loupe/

function fib(num) { // Don't block the stack
    if (num < 2) return 1;
    return fib(num - 2) + fib(num - 1);
}
$.on('button', 'click', function onClick() { // render queue
});


console.log("I'm synchronous 1");
console.log("I'm synchronous 2");
fib(2);
console.log("I'm synchronous 3");