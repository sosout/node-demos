const request = require('request');

const urls = ['http://www.sosout.com/2018/08/12/react-source-analysis.html'];
let count = 0;
const len = urls.length;
let co = 0;

setInterval(function() {
  count = count + 1;
  request(urls[co], function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('成功' + count);
    }
  })
  co = co + 1;
  if (co == len) {
    co = 0;
  }
}, 3000)