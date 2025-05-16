const http = require('http');
const fs = require('fs');
const common =  require('./module/common.js');
const path = require('path');
const url = require('url')


common.getFileMine('.js');

http.createServer(function (req, res) {


  
//http://127.0.0.1:8081/index.html

//  1、获取地址
let pathName =  url.parse(req.url).pathname;

pathName = pathName == '/' ? '/index.html' : pathName
    // 查询后缀名
let extname = path.extname(pathName)

if(pathName != '/favicon.ico'){

    // readFile 读取内容
    fs.readFile('static' + pathName ,async (err,data)=>{

        if (err) {

           res.writeHead(404,{"Content-type":'text/html;charset="utf-8"'});
            
           res.end('这个页面不存在')

        }


        let mine = await common.getFileMine(extname);
        
        res.writeHead(200,{'Content-Type' : ''+mine+';charset="utf-8"'});

        res.end(data);
    })

}
  
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');