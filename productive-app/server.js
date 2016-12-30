'use strict';
var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
var appPort = 3002;


app.use(express.static(__dirname + '/', {
    etag: false,
    lastModified: false
}));


app.get('*', function (req, res) {
    var slicedUrl = req.url.slice(1, req.url.length);
    fs.createReadStream('./dist/index.html').pipe(res);
});


app.listen(appPort, function () {
    console.log('Site available on http://localhost:' + appPort);
});