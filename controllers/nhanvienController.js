let controller={};
let models=require('../models');
let Nhanvien=models.Nhanvien;

controller.layhetnhanvien=()=>{
    return new Promise((resolve, reject)=>{
        Nhanvien
        .findAll({
            attributes:['id', 'name'],
            order:[['id','ASC']],
            include:[{
                model: models.Vitri,
                attributes:['tenchucvu']
                
            }]
        })
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
}

module.exports = controller;