const http = require('http')
const app = require('./module/router')
const ejs = require('ejs')

// 注册wen服务
http.createServer(app).listen(8080);

app.static("pubilc");

app.get('/', function (req, res) {
    res.send('首页')
})

app.get('/login', function (req, res) {
    ejs.renderFile("./views/form.ejs",{},(err,data)=>{
        res.send(data)
    })
})

app.post('/dologin', function (req, res) {
    res.send(req.body)
})

console.log('Server running at http://127.0.0.1:8080/');