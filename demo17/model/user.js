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
        index:true
    },
    status: {
        type: Number,
        default: 1
    },
    sex:{
        type:String,
        get(params){

        }
    }
})

module.exports =  mongoose.model('Users',UserSchema,'users')