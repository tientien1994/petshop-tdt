let controller={}
let models=require('../models')
const { Op } = require("sequelize");
let Comment=models.Comment


controller.themcomment=(comments)=>{
    return new Promise((resolve, reject)=>{
        Comment
        .create(comments)
        .then(data=>{
            resolve(data)
        })
        .catch(err=>reject(err))
    })
}
controller.laycomments=(idsp)=>{
    return new Promise((resolve, reject)=>{
        Comment
        .findAll({
            where: {
                sanphamId:idsp,
                parent:null
            },
            include:[{model: models.Nguoidung},
                {
                    model: models.Comment,
                    as:'commentcon',
                    include:[{model: models.Nguoidung}]
                }
        ]
        })
        .then(data=>{
            resolve(data)
        })
        .catch(err=>reject(err))
    })
}
module.exports=controller;
