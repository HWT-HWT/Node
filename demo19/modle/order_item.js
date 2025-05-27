const mongoose = require('./db')

const orderSchema = mongoose.Schema({
    order_id: String,
    title:String,
    price: Number, 
    num:Number
})

module.exports = mongoose.model('OrderItem',orderSchema,'order_item');

