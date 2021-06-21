let controller = {};
let models = require('../models');
let Loaitong = models.Loaitong;
let Sanpham = models.Sanpham;
let Loaichinh = models.Loaichinh;
const { Op } = require("sequelize");



function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "e");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "i");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
    str = str.replace(/Đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
}
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
            attributes: ['id', 'name', 'loaitong', 'loaichinh','loaisanpham','gia']
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
controller.laysanpham = (params, query) => {
    return new Promise((resolve, reject) => {
        options = {
            include: [{
                order:[
                    ['id', 'DESC'],
                ],
                model: models.Sanpham,
                attributes: ['id', 'name', 'thuonghieuId', 'gia', 'loaitong', 'loaichinh', 'loaisanpham','luotxem'],
                where: {
                    loaitong: params.loaitong.toString()
                },
                
                include: [{
                    model: models.Thuonghieu,
                    attributes: ['id', 'name'],
                }]
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
            options.include[0].where.thuonghieuId = query.thuonghieu
        }
        if (params.loaichinh) {
            options.include[0].where.loaichinh = params.loaichinh.toString()
        }
        if (params.loaisanpham) {
            options.include[0].where.loaisanpham = params.loaisanpham.toString()
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
            .findAll(options)
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}
// lấy hêt de lam menu
controller.layhetloaitong = (params, query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'link'],
            where: { link: params.loaitong.toString() },
            include: [{
                attributes: ['id', 'name', 'link'],
                model: models.Loaichinh,

                include: [{
                    attributes: ['id', 'name'],
                    model: models.Sanpham,

                    where: {
                        
                    }
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
        attributes: ['id', 'name', 'thuonghieuId', 'gia', 'loaitong', 'loaichinh', 'loaisanpham','luotxem'],
        order:[
            ['luotxem','DESC']
        ],
        include: [{
            model: models.Thuonghieu,
            attributes: ['id', 'name']
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


module.exports = controller;