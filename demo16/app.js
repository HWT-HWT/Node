const  express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')

//配置路由
const admin = require('./routes/admin')
const index = require('./routes/index')
const api = require('./routes/api')
const multer = require('multer')

const app = express()
const port = 3000

// 配置ejs 修改后缀名
app.engine('html',ejs.__express)
app.set('view engine','html')
// 配置静态资源路径
app.use(express.static('static'))

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

// 配置外部模块
app.use('/admin',admin)
app.use('/api',api)
app.use('/',index)


app.listen(port, () => console.log(`127.0.0.1:${port}`))