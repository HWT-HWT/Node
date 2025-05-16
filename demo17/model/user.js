const mongoose = require('./db.js')

var UserSchema = mongoose.Schema({
    name: {
        type:String,
        set(params){
            return 'a001' + params
        }
    },
    age: Number,
    status: {
        type: Number,
        default: 1
    },
})

module.exports =  mongoose.model('Users',UserSchema,'users')