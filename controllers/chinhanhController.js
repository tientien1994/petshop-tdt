let controller={};
let models=require('../models');
let Chinhanh=models.Chinhanh;


controller.layhetchinhanh=()=>{
    return new Promise((resolve, reject)=>{
        Chinhanh
        .findAll({
            order:[['createdAt','DESC']],
            attributes: ['id','name']
        })
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
}
module.exports = controller;