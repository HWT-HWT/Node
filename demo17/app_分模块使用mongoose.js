const userModel =  require('./model/user.js')
const newsModel = require('./model/news.js')

async function main() {
  try {

    // const UserFind = await userModel.find()

    // console.log(UserFind);

    // const NewsFind = await newsModel.find()

    // console.log(NewsFind);
    
    // const NewsUser = new userModel({
    //     name:'赵六',
    //     age:20,    
    // })

    // const UserAdd = await NewsUser.save()

    // console.log(UserAdd);

    // const UserFind = await userModel.find()

    // console.log(UserFind);

    const UserDeleteOne = await userModel.deleteOne({'_id':'6825974fd594cd91abfad0fc'})

    console.log(UserDeleteOne);
    
    
    
  } catch (error) {
    console.log('出现问题');
  }
  
}

main()