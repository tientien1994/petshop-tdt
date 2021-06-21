let controller ={}
let models=require('../models')
Sanpham=models.Sanpham
const { Op } = require("sequelize");

controller.laykhoanggia=(params, max, min, query)=>{
    return new Promise((resolve, reject)=>{

        let options={
            attributes:['id', 'name'],
            where:{
                gia:{[Op.and]: [{ [Op.gte]: min }, { [Op.lt]: max}]},
                loaitong:params.loaitong.toString()
            }
        };
        if(params.loaichinh){
            options.where.loaichinh=params.loaichinh.toString()
        }
        if(params.loaisanpham){
            options.where.loaisanpham=params.loaisanpham.toString()
        }
        if(query.thuonghieu){
            options.where.thuonghieuId=query.thuonghieu.toString()
        }
        Sanpham
        .findAll(options)
        .then(data=>{
            if(data.length>0){
                resolve(data.length)
            }
            else{
                resolve("0")
            }
            
        })
        .catch(err=>reject(err))
    })
}



module.exports = controller;