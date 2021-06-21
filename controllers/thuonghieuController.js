let controller ={}
let models=require('../models')
Thuonghieu=models.Thuonghieu
const { Op } = require("sequelize");

controller.laythuonghieu=(params, query)=>{
    return new Promise((resolve, reject)=>{
        if(query.max==null||isNaN(query.max)){
            query.max=10000000
        }
        if(query.min==null||isNaN(query.min)){
            query.min=0
        }
        if(query.thuonghieu==null||isNaN(query.thuonghieu)){
            query.thuonghieu=0
        }
        let options={
            attributes:['id', 'name'],
            order:[
                ['id', 'DESC']
            ],
            include:[{
                model:models.Sanpham,
                attributes:['id', 'name', 'loaitong'],
                where:{
                    
                }
            }]
        }
        if(params.loaitong){
            options.include[0].where.loaitong=params.loaitong.toString()
        }
        if(params.loaichinh){
            options.include[0].where.loaichinh=params.loaichinh.toString()
        }
        if(params.loaisanpham){
            options.include[0].where.loaisanpham=params.loaisanpham.toString()
        }
        if(query.max&&query.min){
            options.include[0].where.gia={[Op.and]: [{ [Op.gte]: query.min }, { [Op.lt]: query.max}]}
            
        }
        
        // if(query.loaisanpham){
        //     options.include[0].where.loaisanpham=params.loaisanpham.toString()
        // }
        Thuonghieu
        .findAll(options)
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
    
}

module.exports = controller;