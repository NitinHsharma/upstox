const {
    Worker
} = require('worker_threads');


const getDataWorker = new Worker(__dirname + '/workers/getData.js');
const processDataWorker = new Worker(__dirname + '/workers/process.js');
const serveDataWorker = new Worker(__dirname + '/workers/response.js');


getDataWorker.on('message', value => {
    processDataWorker.postMessage(value);
});

processDataWorker.on('message', value => {
    serveDataWorker.postMessage(value);
});
