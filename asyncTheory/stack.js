//latentflip.com/loupe/
function log(text) {
    console.log(text);
}
function multiply(a, b) {
    return a * b;
}
function calcSquare(n) {
    return multiply(n, n);
}
function printSquare(n) {
    let square = calcSquare(n);
    console.log(square);
}
function main() {
    printSquare(42);
}
multiply(21, 2);
log('Some important text');
main();