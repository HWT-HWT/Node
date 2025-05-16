const url = require('url')
const http = require('http');

/*
    request  获取客户端穿过来的消息
    response 给浏览器响应信息
*/ 

http.createServer(function(req,res){

    // 设置响应头
    res.writeHead(200,{'content-type':'text/html;charset="utf-8"'});

    res.write('this is node.js 前端');

    res.write('<h1>前端</h1>');

    

    if(req.url!=='/favicon.ico'){
        
        console.log(req.url);
        
        var userinfo=url.parse(req.url,true).query;

        console.log(`名字：${userinfo.name} 年龄：${userinfo.age}`);

    }

    res.end('你好nodeJs');

}).listen(3000)

