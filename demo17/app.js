// const newsModel = require('./model/news.js')
const UserModel = require('./model/focus.js')


async function main() {
  try {

    // const news = new newsModel({
    //   title:'    我是二个国际新闻    ',
    //   author:'张三222',
    //   pic:'http://ccc.com',
    //   content:'我是内容222'
    // })

    // const newsAdd = await news.save()

    // console.log(newsAdd);

    //保存数据
     const user = new UserModel({
      title:'    我是二个国际新闻    ',
      author:'张三333',
      pic:'http://ccc.com',
      redirect:'www.baidu.com'
    })
    
    // const userAdd = await user.save()
    
    // console.log(userAdd);


    console.log(user.title);
    

    // const userFind = await UserModel.find()
    // console.log(userFind);
    
    
  } catch (error) {
    console.log('出现问题');
  }
  
}

main()