const fs = require('fs')

// var readStream = fs.createReadStream('./data/input/text')

// var count = 0; 
// var str = '';

// readStream.on('data',(data)=>{
//     str+=data;
//     count++
// })

// readStream.on('end',()=>{
//     console.log(str);
//     console.log(count);
    
// })

// readStream.on('error',(err)=>{
//     console.log(err);
// })


var readStream = fs.createReadStream('./data/input/text')

var writeStream = fs.createWriteStream('output.text')


readStream.pipe(writeStream);

console.log('执行完毕');
