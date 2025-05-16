//解构出 {MongoClient}  方法
const { MongoClient } = require('mongodb');
// 输入连接url地址
const uri = 'mongodb://localhost:27017';
// new MongoClient 连接数据库
const client = new MongoClient(uri);
// 使用 async await 
async function run() {
  try {
    // 建立连接
    await client.connect();
    // 将db.itying 赋值给 db
    const db = client.db('eggcms');
    // 添加数据
    // const insert = await db.collection('order_item').insertOne({"order_id":"3","title":"毛巾","price":10,num:1})
    // 查找数据
    const find = await db.collection('order').aggregate([
    
      {
        $lookup:{		
            from:"order_item",
            localField:"order_id",
            foreignField:"order_id",
            as:"items"
          }
      }
      
    ]).toArray()
    // 打印结果
    console.log(find[0]);

  } catch (err) {
    // 返回报错
    console.error('操作失败:', err);

  } finally {
    // 关闭连接
    await client.close(); // 确保连接最终关闭
  }
}
// 调用函数
run();
