const express = require('express')

var routes = express.Router()

routes.get('/',(req,res)=>{
    res.send('用户登录页面')
})

routes.get('/dologin',(req,res)=>{
    res.send('执行登录')
})

module.exports  = routes