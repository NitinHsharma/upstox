const readline = require('readline');
const fs = require('fs');
const { parentPort } = require('worker_threads');

const readInterface = readline.createInterface({
    input: fs.createReadStream(__dirname + '/../data/trades.json'),
    output: process.stdout,
    console: false
});

readInterface.on('line', function (line) {
    parentPort.postMessage(line);
});

readInterface.on('error', function (line) {
    console.log(line);
});