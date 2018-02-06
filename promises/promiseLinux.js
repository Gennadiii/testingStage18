const fs = require('fs');
const assert = require('assert');


function ls(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, cbHandler(resolve, reject))
  });

}

function mkDir(path) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, cbHandler(resolve, reject))
  });

}

function writeFile(path, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, text, cbHandler(resolve, reject))
  });

}

function cbHandler(resolve, reject) {
  return (err, stdout) => {
    err && reject(err);
    resolve(stdout);
  }
}


ls(__dirname)
  .then(console.log)
  .then(_ => mkDir(`${__dirname}/tempDir`))
  .then(_ => ls(__dirname))
  .then(stdout => assert.equal(stdout.includes('tempDir'), true, `tempDir was not created`))
  .then(_ => writeFile(`${__dirname}/tempDir/tempFile.txt`))
  .then(_ => ls(`${__dirname}/tempDir`))
  .then(stdout => assert(stdout.includes('tempFile.txt'), true, `didn't find tempFile.txt`))
  .catch(err => console.log(err));
