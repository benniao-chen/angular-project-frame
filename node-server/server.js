const express = require('express');
const proxy = require('express-http-proxy');
const timeout = require('connect-timeout');

const app = express();

//https://github.com/expressjs/cors 跨域请求处理

app.get('/atest', function(req, res) {
    setTimeout(function() {
        res.send("test server");
    }, 140000);
})

function succeessNext(req, res, next) {
    next();
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-sid, stationid, env");
  next();
});

app.use('/test', succeessNext, proxy('localhost:3000', {
    timeout: 150000,
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
      return proxyReqOpts;
    }
}));

require('./read-write-file/read-write.server').listen(app);

const server = app.listen(3000, function() {
    console.log('server start');
})

server.timeout = 180000;