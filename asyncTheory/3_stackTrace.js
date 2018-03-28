function multiply(a, b) {
  throw new Error('Some error');
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

main();