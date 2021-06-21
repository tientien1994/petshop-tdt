let controller={};
let models=require('../models');
let Tlbaiviet=models.Tlbaiviet;
let Baiviet=models.Baiviet;

controller.tatcatheloai=()=>{
    return new Promise((resolve, reject)=>{
        Tlbaiviet
            .findAll({
                attributes:['id','tentheloai'],
                order:[
                    ['id','ASC'],
                    [models.Baiviet, 'luotxem', 'DESC']
                ],
                include:[{
                    model: models.Baiviet,
                    attributes:['id', 'name','title']
                }]
            })
            .then(data=>{resolve(data)})
            .catch(err=>reject(err))
    })
}
controller.layluotxem=(params)=>{
    return new Promise((resolve, reject)=>{
        Baiviet
        .findOne({
            where: {
                id:params.idbaiviet
            },
            attributes:['luotxem']
        })
        .then(data=>resolve(data))
        .catch(err => reject(err))
    })
}
controller.themluotxem=(params, luotxem)=>{
    return new Promise((resolve, reject)=>{
        Baiviet
        .update(
            {
            luotxem: parseInt(luotxem) +1
        },
        {
            where: {
                id:params.idbaiviet
            }
        }
        )
        .then(data=>resolve(data))
        .catch(err => reject(err))
    })
}
controller.motloaitintuc=(theloaitt)=>{
    return new Promise((resolve, reject)=>{
        Tlbaiviet
            .findOne({
                attributes:['id','tentheloai'],
                where:{id:theloaitt},
                include:[{
                    model: models.Baiviet,
                    attributes:['id', 'name', 'luotxem', 'createdAt', 'title']
                }]
            })
            .then(data=>resolve(data))
            .catch(err=>reject(err))
    })
}
controller.motbaiviet=(params)=>{
    return new Promise((resolve, reject)=>{
        Tlbaiviet
            .findOne({
                attributes:['id','tentheloai'],
                where:{id:parseInt(params.idtheloai)},
                include:[{
                    model: models.Baiviet,
                    where: {id:parseInt(params.idbaiviet)},
                    attributes:['id', 'name']
                }]
            })
            .then(data=>{
                resolve(data)
            })
            .catch(err=>reject(err))
    })
}
controller.toptintuc=()=>{
    return new Promise((resolve, reject)=>{
        Baiviet
        .findAll({
            attributes:['id','name','title', 'luotxem','tlbaivietId'],
            limit:4,
            order:[
                ['luotxem', 'DESC']
            ]
        })
        .then(data=>resolve(data))
        .catch(err => reject(err))
    })
}
controller.tinlienquan=(prams)=>{
    return new Promise((resolve, reject)=>{
        Baiviet
        .findAll({
            limit:3,
            attributes:['id','name','title','luotxem','tlbaivietId'],
            where:{tlbaivietId:prams.idtheloai}
        })
        .then(data=>resolve(data))
        .catch(err => reject(err))
    })
}
controller.lay3=()=>{
    return new Promise((resolve, reject)=>{
        Baiviet
        .findAll({
            limit:3,
            order: [['luotxem','DESC']],
            include:[{
                model:models.Tlbaiviet
            }]
        })
        .then(data=>resolve(data))
        .catch(err => reject(err))
    })
}

module.exports = controller;