var express = require('express');
var proxy = require('express-http-proxy');
var timeout = require('connect-timeout');

var app = express();

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

var server = app.listen(3000, function() {
    console.log('server start');
})

server.timeout = 180000;