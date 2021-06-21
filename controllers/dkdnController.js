let controller ={}
let models=require('../models')
let Nguoidung=models.Nguoidung
let bcryptjs=require('bcryptjs')

controller.laybangemail=(email)=>{
    return Nguoidung.findOne({ 
        where:{
            name:email
        }
    })
}
controller.taonguoidung=(user)=>{
    var salt =bcryptjs.genSaltSync(10);
    user.matkhau=bcryptjs.hashSync(user.matkhau, salt)
    return Nguoidung.create(user)
}
controller.mahoanguocpass=(pass, hash)=>{
    return bcryptjs.compareSync(pass, hash)
}





module.exports =controller;