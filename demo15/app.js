const express = require('express')
const ejs = require('ejs')

const app = express()

// 配置静态目录
app.use(express.static('static'))

app.engine("html",ejs.__express)
app.set("view engine","html")

const port = 3000

app.get('/', (req, res) => {
    let title = 'hello ejs'
    let h2 = '<h1>Ejs</h1>'
    let num = 60
    let arr = ['111','222','333']
    let obj =[{name:'aaa'},{name:'xxx'},{name:'ccc'}]
    res.render("index",{
        title:title,
        h2:h2,
        num:num,
        arr:arr,
        obj:obj
    })
})

app.get('/news', (req, res) => {
    res.render("news",{

    })
})

app.listen(port, () => console.log(`http://127.0.0.1:${port}`))