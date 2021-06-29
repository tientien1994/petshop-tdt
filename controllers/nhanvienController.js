let controller={};
let models=require('../models');
let Nhanvien=models.Nhanvien;


controller.layhetnhanvien=()=>{
    return new Promise((resolve, reject)=>{
        Nhanvien
        .findAll({
            order:[['updatedAt','DESC']],
            include:[{
                model: models.Vitri,
                attributes:['tenchucvu']  
            },{
                model: models.Chinhanh,
                attributes:['name'] 
            }
        ]
        })
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
}
controller.timnhanvien=(id)=>{
    return new Promise((resolve, reject)=>{
        Nhanvien
        .findOne({
            where: {id:id}
        })
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
}
controller.motnhanvien=(id)=>{
    return new Promise((resolve, reject)=>{
        Nhanvien
        .findOne({
            include:[{
                model: models.Vitri,
                attributes:['id','tenchucvu'] 
            }],
            where: {id:id}
        })
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
}

controller.suanhanvien=(biennhanvien)=>{
    return new Promise((resolve, reject)=>{
    Nhanvien
    .update(
            biennhanvien,
        {
            where: {id:parseInt(biennhanvien.id)}
        }
        )
    .then(data=>resolve(data))
    .catch(err=>res.json(err))
    })
}
controller.xoanhanvien=(id)=>{
    return new Promise((resolve, reject)=>{
    Nhanvien
    .destroy(
            {where: {id:id}}
        )
    .then(data=>resolve(data))
    .catch(err=>res.json(err))
    })
}

controller.themnhanvien=(biennhanvien)=>{
    return new Promise((resolve, reject)=>{
    Nhanvien
    .create({
        name:biennhanvien.name,
        phone:biennhanvien.phone,
        diachi:biennhanvien.diachi,
        chinhanhId:biennhanvien.chinhanhId,
        vitriId:biennhanvien.vitriId,
        luong:biennhanvien.luong
    })
    .then(data=>resolve(data))
    .catch(err=>res.json(err))
    })
}







module.exports = controller;