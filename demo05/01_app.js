const fs  = require('fs')
var path = './upload'

fs.stat(path,(err,data)=>{
    if (err) {
        mkdir(path)
        return
    }

    if (data.isDirectory()) {
        console.log('upload存在');
        return
    }else{
        console.log('进入删除函数');
        fs.unlink(path,(err)=>{
            if (!err) {
                mkdir(path)
            }else{
                console.log('传入正确的值');
            }
           
        })
    }
})

function mkdir(dir) {
    fs.mkdir(dir,(err)=>{
        if(err){
            console.log('创建失败',err);
            return
        }
        console.log('原无upload文件夹,现创建upload成功');
    })
}