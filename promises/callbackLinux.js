const fs = require('fs');
const assert = require('assert');


function ls(path, callback) {
  return fs.readdir(path, callback)
}

function mkDir(path, callback) {
  return fs.mkdir(path, callback)
}

function writeFile(path, text, callback) {
  return fs.writeFile(path, text, callback);
}


ls(__dirname, (err, stdout) => {
  console.log(stdout);

  mkDir(`${__dirname}/tempDir`, () => {

    ls(__dirname, (err, stdout) => {
      assert.equal(stdout.includes('tempDir'), true, `tempDir was not created`);

      writeFile(`${__dirname}/tempDir/tempFile.txt`, 'some data', () => {

        ls(`${__dirname}/tempDir`, (err, stdout) => {
          assert(stdout.includes('tempFile.txt'), true, `didn't find tempFile.txt`);
        })
      })
    })
  })
});