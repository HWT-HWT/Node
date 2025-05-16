const mongoose = require('mongoose')

async function main(){
    try {

        // 建立连接
        await mongoose.connect('mongodb://127.0.0.1:27017/eggcms');
        console.log('连接成功数据库');

        // 定义Schema
        const UserSchema = mongoose.Schema({
            title: String,
            author: String,
            pic: String,
            content:String,
            status:1
        })
        

        const User = mongoose.model('User', UserSchema,'users');

        查找数据 

        const Users = await User.find()

        console.log('数据：'+ Users);

        增加数据
        var u = new  User({
            name:'李四',
            age:20,
            status:1
        })

        const SaveUser = await u.save()

        console.log('数据添加成功：'+SaveUser);
        

        


    } catch (error) {
        console.log(error);
        
    }finally{
        await mongoose.disconnect();
    }

}

main()
