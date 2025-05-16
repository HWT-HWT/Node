const { promises } = require('dns');
const fs = require('fs')

exports.getMine=function(extname){
    switch(extname){

        case '.html' : 
        return 'text/html';

        case '.css' : 
        return 'text/css';

        case '.js' : 
        return 'text/js';

    }
}


exports.getFileMine=function(extname){
    
  return new Promise((res,rej)=>{
    fs.readFile('./data/mime.json',(err,data)=>{
        if(err){
            console.log(err);
            rej(err)
            return        
        }
        
        let mimeObj= JSON.parse(data.toString())

        res(mimeObj[extname]);
   })
  })
  

// 同步方法
//   var data =  fs.readFileSync('./data/mime.json')
    
//   let mimeObj= JSON.parse(data.toString())

//   return (mimeObj[extname]);
}