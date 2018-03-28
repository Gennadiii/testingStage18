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


void async function main() {
  try {
    let mainDirLs = null,
      tempDirLs = null;
    console.log(await ls(__dirname));

    await mkDir(`${__dirname}/tempDir`);

    mainDirLs = await ls(__dirname);
    assert.equal(mainDirLs.includes('tempDir'), true, `tempDir was not created`);

    await writeFile(`${__dirname}/tempDir/tempFile.txt`);

    tempDirLs = await ls(`${__dirname}/tempDir`);
    assert(tempDirLs.includes('tempFile.txt'), true, `didn't find tempFile.txt`);
  } catch (err) {
    console.log(err);
  }
}();