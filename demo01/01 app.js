// 引入http模块
var http = require('http');

/*
    request  获取url穿过来的消息
    response 给浏览器响应信息
*/ 
http.createServer(function (request, response) {
  //设置响应投
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // 表示输入一句话且结束响应   
  response.end('Hello World 前端');

}).listen(8081); //端口号

console.log('Server running at http://127.0.0.1:8081/');