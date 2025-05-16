const fs = require('fs');
const path = require('path');
const url = require('url');

//私有方法
let getFileMime = function (extname) {

    var data = fs.readFileSync('./data/mime.json'); //同步方法
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];

}


let app = { 
    static:(req, res, staticPath)=>{
        //1、获取地址
        let pathname = url.parse(req.url).pathname;
        
        let extname = path.extname(pathname);

        if (extname) {  //如果有后缀名让静态web处理 否则路由处理
            //2、通过fs模块读取文件
            if (pathname != '/favicon.ico') {
                try {
                    let data = fs.readFileSync('./' + staticPath + pathname);
                    if (data) {
                        let mime = getFileMime(extname);
                        res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
                        res.end(data);
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
    },
    login:(req, res)=>{
        res.end('login')
    },
    news:(req,res)=>{
        res.end('news')
    },
    doLogin:(req,res)=>{
        res.end('doLogin')
    },
    register:(req, res)=>{
        res.end('register')
    },
    error:(req,res)=>{
        res.end('error')
    }
}

module.exports = app

