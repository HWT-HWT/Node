const UserModel = require('./model/user')

const main  = async ()=>{
  try {
    
    const user = new UserModel({
      name:'赵六',
      sn:'123456789',
      age:29
    })

    // await user.save()

    const FindSn = await UserModel.findBySn('1234567')

    console.log(FindSn);

    await user.print();

  } catch (error) {

    console.log(error);

  }
}

main()

