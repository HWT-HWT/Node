const http = require('http');
const routes = require('./module/routes');
const url = require('url');
const path = require('path')

http.createServer(function (req, res) {
    //创建静态web服务
    routes.static(req, res, 'static');
    let pathname = url.parse(req.url).pathname.replace('/','');

    let extname = path.extname(pathname);
    
    if (!extname) {
            try {
                routes[pathname](req,res)
            } catch (error) {
                routes['error'](req,res)
            }
    }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');