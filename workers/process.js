const { parentPort } = require('worker_threads');

const stockData = [];

parentPort.on('message', data => {
    stockData.push(data);
});



setInterval(() => {
    parentPort.postMessage(stockData.slice(0, stockData.length - 1));
}, 15000);