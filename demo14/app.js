var express = require("express")

var app = express()

app.get('/',(req,res)=>{
  res.send("首页")
})

app.get('/search',(req,res)=>{
  res.send('搜索')
})

app.listen(3000,'127.0.0.1');

console.log('127.0.0.1:3000');
