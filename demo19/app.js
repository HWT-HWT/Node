const OrderModule = require('./modle/order')
const OrderItemModule = require('./modle/order_item')
const mongoose = require('mongoose')

async function main(){
    try {
        
    //     const Orderaggregate =  await OrderModule.aggregate([
    //         {
    //             $lookup:{
    //                 from:'order_item',
    //                 localField:'order_id',
    //                 foreignField:'order_id',
    //                 as:'item'
    //             }
    //         },
    //         {
    //             $match:{"all_price":{$gte:100}}
    //         } 
    //    ])

    //  console.log(JSON.stringify(Orderaggregate));

        // 第一种方法
       
        // var OrderItemFind  = await OrderItemModule.find({'_id':'680f13dd7b15afd32b1ea5d8'})

        // OrderItemFind = JSON.parse(JSON.stringify(OrderItemFind))

        // const orderFind  = await OrderModule.find({'order_id':OrderItemFind[0].order_id})

        // OrderItemFind[0].order_info = orderFind[0]

        // console.log(OrderItemFind);

        // 第二种方式
        const OrderItemAggregate =  await OrderItemModule.aggregate([
            {
                $lookup:{
                    from:'order',
                    localField:'order_id',
                    foreignField:'order_id',
                    as:'order_info'
                },
            },
            {
                $match:{_id: new mongoose.Types.ObjectId('680f13dd7b15afd32b1ea5d8')}
            } 
        ])
       
        console.log(JSON.stringify(OrderItemAggregate));
        
       
    } catch (error) {
        console.log(error);
        
    }
}

main()