const mongoose = require('./db')

const orderSchema = mongoose.Schema({
    order_id:String,
    uid:Number,
    trade_no:String,
    all_price:Number,
    all_num:Number
})

module.exports = mongoose.model('Order',orderSchema,'order');

