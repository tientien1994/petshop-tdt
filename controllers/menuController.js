let controller ={}
let models =require('../models')
let Loaitong=models.Loaitong

controller.menu=()=>{
    return new Promise((resolve, reject)=>{
        Loaitong
         .findAll({
             attributes:['id', 'name', 'link'],
             include:[{
                 model:models.Loaichinh,
                 attributes:['id', 'name', 'link'],
                 include:[{
                    model:models.Loaisanpham,
                    attributes:['id', 'name', 'link'],
                    
                }]
             }]
         })
         .then(data=>resolve(data))
         .catch(err=>reject(err))
    })
}
module.exports = controller;