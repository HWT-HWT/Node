const mongoose = require('./db.js')

var UserSchema = mongoose.Schema({
    name: {
        type:String,
        set(params){
            return 'a001' + params
        }
    },
    age: {
        type:Number,
        index:true,
        required:true,
        min:100,
        max:150
    },
    status: {
        type: String,
        // default: '1',
        enum:['0','1','2']
    },
    sex:{
        type:String,
        validate:function(desc){
            return desc.length >= 10
        }
    }
})

module.exports =  mongoose.model('Users',UserSchema,'users')