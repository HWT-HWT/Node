const fs = require('fs')

var path = './wwwroot'
var list = [];

fs.readdir('./wwwroot',(err,data)=>{
    if (err) {
        console.log(err);
    }
   (function getDir(i){
        if (i === data.length) {
            console.log(list);
            return
        }
        fs.stat(path+'/'+data[i],(err,stats)=>{
            if (stats.isDirectory()) {
                list.push(data[i])
            }
            getDir(i+1)
        })
   })(0)
})

