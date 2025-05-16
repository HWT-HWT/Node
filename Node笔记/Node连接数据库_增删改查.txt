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
    const db = client.db('itying');
     // 删除数据
     const dele = await db.collection('user').deleteOne({"usernmae":'王五'})
    // 添加数据
    const insert = await db.collection('user').insertOne({"usernmae":'王五',"age":20})
    // 修改数据
    const update = await db.collection('user').updateOne({"usernmae":'王五'},{$set:{"usernmae":'王麻子'}})
    // 查找数据
    const find = await db.collection('user').find({}).toArray()
    // 打印结果
    console.log(find);
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
