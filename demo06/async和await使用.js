// var app = {
//     name:'张山',
//     run:()=>{
//         console.log('运行');
//     }
// }


// app.run()

// function getDate(callblack){
//     setTimeout(()=>{
//         var name='张山'
//         callblack(name)
//     },1000)
// }


// getDate((aaa)=>{
//     console.log(aaa);
// })


// var p = new Promise(function(res,req){
//     setTimeout(()=>{
//         var name='张山'
//         res(name)
//     },1000)
// })

// p.then((aaa)=>{
//     console.log(aaa);
// })

// async function  text() {
//     return '你好node.js'
// }

// console.log( await text());//错误写法


// await 必须使用在 async里面
async function  text() {
    return new Promise((res,req)=>{
        setTimeout(()=>{
            var name ='zx'
            res(name)
        },1000)
    })
}

async function main(){
    var data = await text();
    console.log(data);
    
}

main()

