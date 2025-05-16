
const fs = require('fs')


// 检测是否是文件夹或文件 stat
// fs.stat('./html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(`是文件：${data.isFile()}`);
//     console.log(`是目录：${data.isDirectory()}`);
// })

// fs.stat('./css',(err,data)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(`是文件：${data.isFile()}`);
//     console.log(`是目录：${data.isDirectory()}`);
// })

// fs.stat('./package.json',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(`是文件：${data.isFile()}`);
//     console.log(`是目录：${data.isDirectory()}`);
// })

// 创建文件夹 mkdir
// fs.mkdir('./css',(err)=>{
//     if (err) {
//         console.log('创建失败');
//         return
//     }
//     console.log('创建成功');
// })

// fs.mkdir('./css',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('创建成功');
    
// })

// 创建文件 且写入内容 writeFile
// fs.writeFile('./html/index.html','nihaonodejs 哈哈哈',(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('创建写入成功');
// })

// fs.writeFile('./html/index.html','login',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('写入成功');
// })

// 给文件添加数据 没有对于文件就创建文件添加数据 appendFile
// fs.appendFile('./xxx/aaa.html','login',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('写入成功');
    
// })

// fs.appendFile('./aaa/axios.js','请求数据',(err)=>{
//         if (err) {
//             console.log(err);
//             return
//         }
//         console.log('成功');
        
//     }
// )

// fs.appendFile('./css/base.css','h3{color:red}\n',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('写入成功');
    
// })

// 读取文件内容 readFile
// fs.readFile('./html/index.html',(err,data)=>{
//     if (err) {
//         console.log('读取失败');
//         return
//     }
//     console.log(data.toString());
// })
// fs.readFile('./axios.js',(err,data)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data.toString());
// })

// 读取文件夹里面的全部文件 readdir
// fs.readdir('./html',(err,data)=>{
//     if (err) {
//         console.log(err);
//         return
//     }

//     console.log(data);
    
// })

// fs.readdir('./html',(err,data)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data);
    
// })

//修改文件名字 rename
// fs.rename('./css/bbb.css','./html/index.css',(err)=>{
//     if (err) {
//         console.log('修改失败');
//         return
//     }
//     console.log('修改成功');
// })

// fs.rename('./axios.js','xxx.js',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('成功');
    
// })

// 删除文件 unlink
// fs.unlink('./aaa/index.html',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('删除');
// })

// fs.unlink('./xxx.js',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('删除成功');
    
// })

// // 删除文件夹
// fs.rmdir('./aaa',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('删除');
// })

// fs.rmdir('./html',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('删除成功');  
// })

// fs.appendFile('./xxx/aaa.html','login',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }

//     console.log('成功创建');
    
// })


// fs.mkdir('./axios',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }else{
//         console.log('文件创建成功');
//         fs.appendFile('./axios/axios.css','',(err)=>{
//             if (err) {
//                 console.log(err);
//                 return
//             }
//             console.log('先创建文件夹再创建文件');
            
//         })
//     }
// })

// fs.rename('../Node笔记','../Node_fs模块_笔记',(err)=>{
//     if (err) {
//         console.log(err);
//         return
//     }

//     console.log('修改成功');
    
// })

// 读取../demo04文件夹里面内容
// fs.readdir('../demo04',(err,data)=>{
//     if (err) {
//         console.log(err)
//         return
//     }else{
//         console.log(data[3]);
//         // 获取文件夹里面的第四个文件名字
//         // 读取demo04第四个文件的内容
//         fs.readFile(data[3],(err,centent)=>{
//             if (err) {
//                 console.log(err);
//                 return
//             }else{
//                 // 转译为字符串
//                 console.log(centent.toString());
//                 // 在上一级文件夹中 创建文件 将 获取到的文件内容转入 新的文件内
//                 fs.writeFile(`../${data[3]}`,centent.toString(),(err)=>{
//                     if (err) {
//                         console.log(err);
//                         return
//                     }
//                     console.log('完成移动内容');
//                 })
//                 // 传入之后将文件获取到的文件删除
//                 fs.unlink(`../${data[3]}`,(err)=>{
//                     if (err) {
//                         console.log(err);
//                     }
//                     console.log('完成删除');
//                 })
//             }
//         })
//     }
    
// })