const mongoose = require('./db')

var UserScheme = mongoose.Schema({
    title:{
        type:String,
        set(params){
            return 'a001' + params
        },
        trim:true
    },
    pic:String,
    redirect:{
        type:String,
        set(parmas){ //增加数据是对redirect字段进行修改

            // parmas 可以获取redirect的值
            if(!parmas)return parmas;

            if (parmas.indexOf('http://') != 0 && parmas.indexOf('https://') != 0 ) {
                return 'http://' +parmas
            }
        }
    },
    status:{
        type:Number,
        default:1
    }
})

module.exports = mongoose.model('User',UserScheme,'user')