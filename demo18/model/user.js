const mongoose = require('./db')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
    },
    sn:{
        type:String,
        index:true
    },
    age:Number,
    status:{
        type:Number,
        default:1
    }
})

// 添加静态方法（示例）

UserSchema.statics.findBySn = function(sn) {
  console.log(this);
  return this.findOne({ sn: sn }) // 返回查询对象
}

// 实例方法

UserSchema.methods.print = function(){
    console.log('我是实例方法');
    console.log(this);
}

module.exports = mongoose.model('User',UserSchema,'user');