//http://latentflip.com/loupe
var counter = 0;

function pow(x, n) {
    counter++;
    if (n < 1) return 1;
    let newN = pow(x, n - 1);
    return x * newN;
}

try {
    console.log(pow(2, 3));
    // console.log(pow(2, 10000));
} catch (err) {
    console.log(counter);
    console.log(err.message);
}