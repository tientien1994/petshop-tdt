let controller={};
let models=require('../models');
let Vitri=models.Vitri;

controller.layhetvitri=()=>{
    return new Promise((resolve, reject)=>{
        Vitri
        .findAll({
            order:[['createdAt','DESC']],
            attributes:["id", 'tenchucvu']
        })
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
}
module.exports = controller;