/**
 * Created by AffeTeufel on 2017/8/7.
 */
var http = require('http'),
    fs = require('fs'),
    mime=require('mime');

var server = http.createServer(function (req, res) {
    var url = req.url;
    if (url === '/') {
        res.setHeader('content-type', 'text/html;charset=utf-8');
        fs.readFile('index.html', function (err, data) {
            res.write(data);//->写响应体
            res.end();
        })
    }else{
        fn(res,url);
    }
    function fn(res,url){
        res.setHeader('content-type', mime.lookup(url)+';charset=utf-8');
        fs.readFile(url.slice(1), function (err, data) {
            res.write(data);//->写响应体
            res.end();
        })
    }

    // } else if (url === '/style.css') {
    //     res.setHeader('content-type', 'text/css;charset=utf-8');
    //     fs.readFile('style.css', function (err, data) {
    //         res.write(data);//->写响应体
    //         res.end();
    //     })
    // } else if (url === '/index.js') {
    //     res.setHeader('content-type', 'application/x-javascript;charset=utf-8');
    //     fs.readFile('index.js', function (err, data) {
    //         res.write(data);//->写响应体
    //         res.end();
    //     })
    // }
});
server.listen(8080, 'localhost');