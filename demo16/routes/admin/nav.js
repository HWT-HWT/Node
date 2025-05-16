const express = require('express')
const tools = require('../../model/tools')

var routes = express.Router()

routes.get('/',(req,res)=>{
    res.send('导航列表')
})

routes.get('/add',(req,res)=>{
    res.render('admin/nav/add')
})
routes.get('/Edit',(req,res)=>{
    res.send('修改导航')
})

routes.post('/doadd', tools.multer().single('pic'),(req,res)=>{
    res.send({
        body:req.body,
        file:req.file
    })
})


routes.post('/doEdit',(req,res)=>{
    res.send('执行修改导航')
})

module.exports  = routes