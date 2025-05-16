const url = require('url')
const path = require('path')
const fs = require('fs')

function changeRes(res) {
    res.send = (data) => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end(data)
    }
}

//私有方法
let getFileMime = function (extname) {
    var data = fs.readFileSync('./data/mime.json'); //同步方法
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
}

function initStatic(req, res, staticPath) {
    //1、获取地址
    let pathname = url.parse(req.url).pathname;

    let extname = path.extname(pathname);

    if (pathname == '/favicon.ico')return
    

    if (extname) {
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

let server = () => {
    let G = {
        _get: {},
        _post: {},
        staticPath: 'static'
    };


    let app = function (req, res) {

        changeRes(res);

        // 配静态web服务
        initStatic(req, res, G.staticPath);

        let pathname = url.parse(req.url).pathname

        let method = req.method.toLowerCase();

        let extname = path.extname(pathname);

        if (!extname) {
            if (G['_' + method][pathname]) {
                if (method == 'get') {
                    G['_' + method][pathname](req, res)
                } else {

                    let postData = '';

                    req.on('data', (chunk) => {
                        postData += chunk
                    })

                    req.on('end', () => {
                        req.body = postData
                        console.log(pathname);

                        G['_' + method][pathname](req, res)
                    })

                }

            } else {
                res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
                res.end('页面不存在');
            }
        }
    }

    app.get = function (str, cb) {
        G._get[str] = cb;
    }

    app.post = function (str, cb) {
        G._post[str] = cb;
    }


    // 配置静态web服务
    app.static = function (staticPath) {
        G.staticPath = staticPath;
    }

    return app;
}

module.exports = server();
