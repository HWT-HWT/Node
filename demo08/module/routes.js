const fs = require('fs');
const path = require('path');
const url = require('url')

let getFileMine = function (extname) {
    //     // 创建异步操作
    //     return new Promise((res,rej)=>{
    //         // 读取文件内容 
    //         fs.readFile('./data/mime.json',(err,data)=>{
    //             // 判断错误执行
    //             if(err){
    //                 console.log(err);
    //                 // 返回错误提示
    //                 rej(err)
    //                 return        
    //             }

    //         // 编译读取内容
    //         let mimeObj= JSON.parse(data.toString())

    //         // 响应
    //         res(mimeObj[extname]);
    //    })
    //   })


    // 同步方法 使用同步方法将 await async删除
    var data = fs.readFileSync('./data/mime.json')

    let mimeObj = JSON.parse(data.toString())

    return (mimeObj[extname]);

}


exports.static = function (req, res, staticPath) {
    //http://127.0.0.1:8081/index.html

    //  1、获取传参
    let pathName = url.parse(req.url).pathname;

    // 设置默认参数
    pathName = pathName == '/' ? '/index.html' : pathName

    // 查询后缀名
    let extname = path.extname(pathName)

    // 判断条件
    if (pathName != '/favicon.ico') {
        try {
            // readFile 读取文件内容
            let data = fs.readFileSync('./' + staticPath + pathName)
            if (data) {
                let mine = getFileMine(extname);
                // 设置响应头
                res.writeHead(200, { 'Content-Type': '' + mine + ';charset=utf-8' });
                // 发送响应
                res.end(data);

            }
        } catch (error) {
            // console.log(error)
        }
    }
}