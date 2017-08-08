/**
 * Created by AffeTeufel on 2017/8/7.
 */
var http=require('http');
var server=http.createServer(function(req,res){//->只有请求这个服务的时候才会执行里面的方法
    console.log(req.method);//->请求的方法
    console.log(req.url);//->请求里的url地址
    console.log(req.headers);//->获取请求头

    res.statusCode='404';//->设置状态码
    res.setHeader('name','guozhen');//->设置响应头
    res.setHeader('content-type','text/html;charset=utf-8');//->设置相应的类型
    res.write(new Date().toString());
    res.end();
});
server.listen(8080,'localhost');