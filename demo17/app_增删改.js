const mongoose = require('mongoose')

async function  main(){
    try {
        // 建立连接
        await mongoose.connect('mongodb://127.0.0.1:27017/eggcms')
        console.log('连接成功');

         // 定义Schema
        const NewShema = mongoose.Schema({
            title: String,
            author: String,
            pic: String,
            content:String,
            status:Number
        })

        //创建表 或者 选择表
        const News = mongoose.model('News',NewShema,'news')

        //添加数据

        // const news = new News({
        //     title: '我是一个新闻333',
        //     author: '张三333',
        //     content:'我是内容333',
        //     status:1
        // })
            
        // const add  = await news.save()

        // console.log(add);

        // 修改数据
        // const update  = await News.updateOne({'_id':'68259b24dc0e5bbe9806dfe6'},{'title':'我是新闻222'})

        // console.log(update);


        // 删除数据
        const del = await News.deleteOne({'title':'我是一个新闻333'})

        console.log(del);
        
        

    } catch (error) {
        console.log(error);
    }
}

main()