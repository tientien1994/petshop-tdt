let controller = {};
let models = require('../models');
let Loaitong = models.Loaitong;
let Sanpham = models.Sanpham;
let Loaichinh = models.Loaichinh;
const { Op } = require("sequelize");




// lay san pham theo loaichinh
controller.layluotxem=(idsp)=>{
    return new Promise((resolve, reject) => {
        Sanpham
        .findOne({
            where: {id:idsp},
            attributes: ['luotxem'],
            plain: true
        })
        .then(data => resolve(data))
        .catch(err => reject(err))

    })
}
controller.themluotxem = (idsp,luotxem) => {
    return new Promise((resolve, reject) => {
        var value=parseInt(luotxem)+1;
        Sanpham
            .update(
                {
                luotxem: value
                },
                {
                    where: {
                        id: idsp
                    }
                }
            )
            .then()
            .catch(err => reject(err))
    })
}
controller.laysptheoid=(id)=>{
    return new Promise((resolve, reject) => {
        Sanpham
        .findOne({
            where:{
                id:id
            }
            ,
            attributes: ['id', 'name','gia']
        })
        .then(data => resolve(data))
            .catch(err => reject(err))
    })
}
controller.lay1sanpham = (params, query) => {
    return new Promise((resolve, reject) => {
        options = {
            attributes: ['id', 'name', 'link'],
            where: {
                link: params.loaitong.toString()
            },
            include: [{
                model: models.Loaichinh,
                attributes: ['id', 'name', 'link'],
                where: {
                    link: params.loaichinh.toString()
                },
                include: [{
                    model: models.Loaisanpham,
                    attributes: ['id', 'name', 'link'],
                    where: {
                        link: params.loaisanpham.toString()
                    },
                    include: [{
                        model: models.Sanpham,
                        where: {
                            id: params.idsp.toString()
                        },
                        include: [{
                            model: models.Thuonghieu,
                            
                        }]
                    }]
                }]
            }]

        }
        Loaitong
            .findAll(options)
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}
controller.laymotsanpham = (id) => {
    return new Promise((resolve, reject) => {
        
        Sanpham
            .findOne({
                where: {id:id},
                include: [{
                    model: models.Loaisanpham,
                    attributes: ['id', 'name']
                }]
            })
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}
controller.laysanpham = (params, query) => {
    var page=query.page||1;
    return new Promise((resolve, reject) => {
        options = {
            include: [{
                model: models.Sanpham,
                order:[
                    ['id', 'DESC'],
                ],
               // attributes: ['id', 'name', 'gia','luotxem', 'loaitong', 'loaichinh', 'loaisanpham', 'thuonghieuId'],
                where: {
                   
                },
                
                include: [{
                    model: models.Thuonghieu,
                    attributes: ['id', 'name'],
                    where: {
                        
                    },
                },
                {
                    model: models.Loaitong,
                    attributes: ['id', 'name','link'],
                    where: {
                        
                    },
                },
                {
                    model: models.Loaichinh,
                    attributes: ['id', 'name',"link"],
                    where: {
                        
                    },
                },
                {
                    model: models.Loaisanpham,
                    attributes: ['id', 'name',"link"],
                    where: {
                        
                    },
                }],
                
                
            }],
            attributes: ['id', 'name', 'link'],
            order:[
                ['id', 'ASC'],
                //[models.Sanpham,'gia', 'asc']
            ]
           
        }
        if (query.max && query.min) {
            options.include[0].where.gia = { [Op.and]: [{ [Op.gt]: query.min }, { [Op.lt]: query.max }] }
        }
        if (query.thuonghieu) {
            options.include[0].include[0].where.id = query.thuonghieu
        }
        if (params.loaichinh) {
            options.include[0].include[2].where.link = params.loaichinh.toString()
        }
        if (params.loaisanpham) {
            options.include[0].include[3].where.link = params.loaisanpham.toString()
        }
        if (params.loaitong) {
            options.include[0].include[1].where.link = params.loaitong.toString()
        }
        if (query.search) {
            options.include[0].where.name = {
                [Op.or]:[{
                    [Op.iLike]:`%${query.search}%`
                }]
            }
        }
        if(query.sapxep){
            if(query.sapxep=='DESC'||query.sapxep=='ASC'){
                options.order=[[models.Sanpham,'gia',`${query.sapxep}`]]
            }
            
            if(query.sapxep=='viewDESC'){
                options.order=[[models.Sanpham,'luotxem','DESC']]
            }
            if(query.sapxep=='viewASC'){
                options.order=[[models.Sanpham,'luotxem','ASC']]
            }
            if(query.sapxep=='name'){
                options.order=[[models.Sanpham,'name','ASC']]
            }
                
            
        }


        Loaichinh
            .findAndCountAll(options)
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}
controller.laymotloaisanpham = (params, query) => {
    var page=query.page||1;
    return new Promise((resolve, reject) => {
        options = {
            limit:12,
            offset:(page-1)*12,
            where: {

            },
                include: [{
                    model: models.Thuonghieu,
                    attributes: ['id', 'name'],
                    where: {
                        
                    },
                },
                {
                    model: models.Loaitong,
                    attributes: ['id', 'name','link'],
                    where: {
                        
                    },
                },
                {
                    model: models.Loaichinh,
                    attributes: ['id', 'name',"link"],
                    where: {
                        
                    },
                },
                {
                    model: models.Loaisanpham,
                    attributes: ['id', 'name',"link"],
                    where: {
                        
                    },
                }],
                
                
            }
            
           
        
        if (query.max && query.min) {
            options.where.gia = { [Op.and]: [{ [Op.gt]: query.min }, { [Op.lt]: query.max }] }
        }
        if (query.thuonghieu) {
            options.include[0].where.id = query.thuonghieu
        }
        if (params.loaichinh) {
            options.include[2].where.link = params.loaichinh.toString()
        }
        if (params.loaisanpham) {
            options.include[3].where.link = params.loaisanpham.toString()
        }
        if (params.loaitong) {
            options.include[1].where.link = params.loaitong.toString()
        }
        if (query.search) {
            options.where.name = {
                [Op.or]:[{
                    [Op.iLike]:`%${query.search}%`
                }]
            }
        }
        if(query.sapxep){
            if(query.sapxep=='DESC'||query.sapxep=='ASC'){
                options.order=[['gia',`${query.sapxep}`]]
            }
            
            if(query.sapxep=='viewDESC'){
                options.order=[['luotxem','DESC']]
            }
            if(query.sapxep=='viewASC'){
                options.order=[['luotxem','ASC']]
            }
            if(query.sapxep=='name'){
                options.order=[['name','ASC']]
            }
                
            
        }


        Sanpham
            .findAndCountAll(options)
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}
// lấy hêt de lam menu
controller.layhetloaitong = (params, query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name',"link"],
            where: { link: params.loaitong.toString() },
            include: [{
                attributes: ['id', 'name',"link"],
                model: models.Loaichinh,
                include: [{
                    attributes: ['id', 'name'],
                    model: models.Sanpham,
                    
                }]
            }]
        }
        
        
        Loaitong
            .findAll(options)
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

controller.laymenuloaichinh = (params) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'link'],
            where: {

            },
            include: [{
                model: models.Loaichinh,
                attributes: ['id', 'name', 'link'],
                where: {

                },
                include: [{
                    model: models.Loaisanpham,
                    attributes: ['id', 'name', 'link'],
                    where: {

                    },
                    include: [{
                        model: models.Sanpham,
                        attributes: ['id', 'name']

                    }]
                }]
            }]

        }
        if (params.loaitong) {
            options.where.link = params.loaitong.toString()
        }
        if (params.loaichinh) {
            options.include[0].where.link = params.loaichinh.toString()
        }
        // if (params.loaisanpham) {
        //     options.include[0].include[0].where.link = params.loaisanpham.toString()
        // }
        Loaitong
            .findAll(options)
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}
controller.laymenuloaisanpham = (params) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'link'],
            where: {

            },
            include: [{
                model: models.Loaichinh,
                attributes: ['id', 'name', 'link'],
                where: {

                },
                include: [{
                    model: models.Loaisanpham,
                    attributes: ['id', 'name', 'link'],
                    where: {

                    },
                    include: [{
                        model: models.Sanpham,
                        attributes: ['id', 'name']

                    }]
                }]
            }]

        }
        if (params.loaitong) {
            options.where.link = params.loaitong.toString()
        }
        if (params.loaichinh) {
            options.include[0].where.link = params.loaichinh.toString()
        }
        if (params.loaisanpham) {
            options.include[0].include[0].where.link = params.loaisanpham.toString()
        }


        Loaitong
            .findAll(options)
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

controller.layhetloaichinh = (params, query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'link'],
            where: { link: params.loaitong.toString() },
            include: [{
                model: models.Loaichinh,
                attributes: ['id', 'name', 'link'],
                where: { link: params.loaichinh.toString() },
                include: [{
                    model: models.Loaisanpham,
                    attributes: ['id', 'name', 'link'],
                    include: [{
                        model: models.Sanpham,
                        attributes: ['id', 'name', 'thuonghieuId', 'gia', 'title'],
                        where: {
                        },
                        include: [{
                            model: models.Thuonghieu
                        }]
                    }]
                }]

            }]

        }
        // if (query.max > 0 && query.min > 0) {
        //     options.include[0].include[0].include[0].where.gia = { [Op.and]: [{ [Op.gte]: query.min }, { [Op.lt]: query.max }] }
        // }
        // if (query.thuonghieu) {
        //     options.include[0].include[0].include[0].where.thuonghieuId = query.thuonghieu
        // }
        Loaitong
            .findAll(options)
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}
//
controller.locsanphamtheoloaisanpham = (params) => {
    return new Promise((resolve, reject) => {
        Loaitong
            .findAll({
                attributes: ['id', 'name', 'link'],
                where: { link: params.loaitong.toString() },
                include: [{
                    model: models.Loaichinh,
                    attributes: ['id', 'name', 'link'],
                    where: { link: params.loaichinh.toString() },
                    include: [{
                        model: models.Loaisanpham,
                        attributes: ['id', 'name', 'link'],
                        where: { link: params.loaisanpham.toString() },
                        include: [{
                            model: models.Sanpham,
                            attributes: ['id', 'name', 'thuonghieuId', 'gia', 'title']
                        }]
                    }]

                }]

            })
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}
controller.luotxemnhieunhat=()=>{
    return new Promise((resolve, reject) => {
        Sanpham
    .findAll({
        limit:8,
        attributes: ['id', 'name', 'thuonghieuId', 'gia','luotxem'],
        order:[
            ['luotxem','DESC']
        ],
        include: [{
            model: models.Thuonghieu,
            attributes: ['id', 'name'],
            where: {
                
            },
        },
        {
            model: models.Loaitong,
            attributes: ['id', 'name',"link"],
            where: {
                
            },
        },
        {
            model: models.Loaichinh,
            attributes: ['id', 'name',"link"],
            where: {
                
            },
        },
        {
            model: models.Loaisanpham,
            attributes: ['id', 'name',"link"],
            where: {
                
            },
        }]
    })
    .then(data => resolve(data))
    .catch(err => reject(err))
    })
    
}
controller.lay9=()=>{
    return new Promise((resolve, reject) => {
        Sanpham
    .findAll({
        limit:9,
        attributes: ['id', 'name', 'luotxem'],
        order:[
            ['luotxem','DESC']
        ],
        include: [
            {model: models.Thuonghieu,
            attributes: ['id', 'name']},
            {model: models.Loaitong,
                attributes: ['id', 'name','link']},
                {model: models.Loaichinh,
                    attributes: ['id', 'name','link']},
                    {model: models.Loaisanpham,
                        attributes: ['id', 'name','link']},
            
        ]
    })
    .then(data => resolve(data))
    .catch(err => reject(err))
    })
}
controller.layhetloaisanpham=()=>{
    return new Promise((resolve, reject) => {
        models.Loaisanpham
        .findAll({
            include:[{
                model: models.Loaitong,
                attributes: ['id', 'name']
            }]
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}
controller.layhetsanpham=()=>{
    return new Promise((resolve, reject) => {
        Sanpham
        .findAll({
            limit:21,
            order:[['updatedAt','DESC']],
            include: [{
                model: models.Thuonghieu,
                attributes: ['id', 'name'],
                where: {
                    
                },
            },
            {
                model: models.Loaitong,
                attributes: ['id', 'name',"link"],
                where: {
                    
                },
            },
            {
                model: models.Loaichinh,
                attributes: ['id', 'name',"link"],
                where: {
                    
                },
            },
            {
                model: models.Loaisanpham,
                attributes: ['id', 'name',"link"],
                where: {
                    
                },
            }]
            
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}
controller.layloaitongloaichinh=(id)=>{
    return new Promise((resolve, reject) => {
        models.Loaisanpham
        .findOne({
            where: {id:id},
            attributes: ['id', 'name'],
            include: [{
                model:Loaichinh,
                attributes: ['id', 'name'],
                include: [{
                    model: models.Loaitong,
                    attributes: ['id', 'name']
                }]
            }]
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}
controller.suasanpham=(biensanpham)=>{
    return new Promise((resolve, reject) => {
        Sanpham
        .update(
            biensanpham,
        {
            where: {id: parseInt(biensanpham.id)}
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}
controller.xoasanpham=(id)=>{
    return new Promise((resolve, reject) => {
        Sanpham
        .destroy({where:{id:id}})
        .then(data => resolve(data))
        .catch(err=>res.json(err))
    }) 
}
controller.laymotsanphamdexoa=(id)=>{
    return new Promise((resolve, reject) => {
        Sanpham
        .findOne({where:{id:id}})
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

controller.themsanpham=(biensanpham)=>{
    return new Promise((resolve, reject)=>{
    Sanpham
    .create(biensanpham)
    .then(data=>resolve(data))
    .catch(err=>res.json(err))
    })
}
module.exports = controller;