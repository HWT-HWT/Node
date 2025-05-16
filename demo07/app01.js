const { error, log } = require('console');
const fs = require('fs');

var http = require('http');

http.createServer(function (req, res) {
  
//http://127.0.0.1:8081/index.html

//  1、获取地址
console.log(req.url);

let pathName = req.url

pathName = pathName == '/' ? '/index.html' : pathName

console.log(req.url);

if(pathName != '/favicon.ico'){
    // readFile 读取内容
    fs.readFile('static' + pathName ,(err,data)=>{

        if (err) {
           res.writeHead(404,{"Content-type":'text/html;charset="utf-8"'});
            
           res.end('这个页面不存在')

        }
        res.writeHead(404,{"Content-type":'text/html;charset="utf-8"'});
        res.end(data);
    })

}
  
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');