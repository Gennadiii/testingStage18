function myFunc() {
  try {
    return 24;
  } finally {
    return 42;
  }
}

console.log(myFunc());