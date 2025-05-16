const fs = require('fs')

// var path = './wwwroot'
// var list = [];


// fs.readdir('./wwwroot',(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//    (function getDir(i){
//         if (i === data.length) {
//             console.log(list);
//             return
//         }
//         fs.stat(path+'/'+data[i],(err,stats)=>{
//             if (stats.isDirectory()) {
//                 list.push(data[i])
//             }
//             getDir(i+1)
//         })
//    })(0)
// })


async function isDir(path){
   return new Promise((res,req)=>{
    fs.stat(path,(error,Stats)=>{
        if (error) {
            console.log(error);
            return
        }

        if (Stats.isDirectory()) {
            res(true)
        }else{
            res(false)
        }
    })
   })
}

 function main(){
    var path = './wwwroot'
    var list = [];
    fs.readdir(path, async(err,data)=>{
        if (err) {
            console.log(err);
            return
        }
        
        for (let i = 0; i < data.length; i++) {
           
            if (await isDir(path+'/'+data[i])) {
                list.push(data[i])
                
            } 
        }
        console.log(list);
    })
}

main()
