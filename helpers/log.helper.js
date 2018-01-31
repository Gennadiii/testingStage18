function log(message) {
    console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()} - ${message}`);
}

module.exports.log = log;