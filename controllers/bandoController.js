let controller={}
let models=require('../models')
const { Op } = require("sequelize");
let Vung=models.Vung


controller.laydiachi=(params)=>{
    return new Promise((resolve, reject)=>{
        let options = {
            include:[{
                model: models.Chinhanh
            }],
            where: {
                
            }
        }
        if(params.idvung){
            options.where.id=params.idvung
        }
        Vung
        .findAll(options)
        .then(data=>{
            resolve(data)
        })
        .catch(err=>reject(err))
    })
}
controller.layvung=params=>{
    return new Promise((resolve, reject)=>{
        let options = {
            include:[{
                model: models.Chinhanh
            }],
        }
        Vung
        .findAll(options)
        .then(data=>{
            resolve(data)
        })
        .catch(err=>reject(err))
    })
}

module.exports=controller;
