let express=require('express')
let router=express.Router()
let fs = require('fs')
let path = require('path')

// router.get('/',(req, res)=>{
//     res.render('sanpham');

// })
router.get('/:loaitong',(req, res, next)=>{
    
    res.locals.linkloaitong=req.params.loaitong
    res.locals.laygiamax=parseInt(req.query.max)

    let menuController=require('../controllers/menuController.js')
    let khoanggiaController=require('../controllers/khoanggiaController.js')
    let thuonghieuController=require('../controllers/thuonghieuController')
    let loaitongController=require('../controllers/sanphamController')
    let tintucController=require('../controllers/tintucController')
    res.locals.laythuonghieu=parseInt(req.query.thuonghieu)
    res.locals.sapxep=req.query.sapxep;
    res.locals.searchstring=req.query.search;
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return khoanggiaController.laykhoanggia(req.params, 1000000, 0, req.query)
    })
     
    .then(data=>{
        res.locals.khoanggia=data
        return khoanggiaController.laykhoanggia(req.params, 3000000, 1000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia2=data
        return khoanggiaController.laykhoanggia(req.params, 5000000, 3000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia3=data
        return khoanggiaController.laykhoanggia(req.params, 7000000, 5000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia4=data
        return khoanggiaController.laykhoanggia(req.params, 9000000, 7000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia5=data
        return khoanggiaController.laykhoanggia(req.params, 10000000, 9000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia6=data 
        return thuonghieuController.laythuonghieu(req.params, req.query)   
    })
    .then(data=>{
        res.locals.thuonghieu=data
        return loaitongController.layhetloaitong(req.params, req.query)
    })
    .then(data=>{
        res.locals.loaitong=data
        return loaitongController.laysanpham(req.params, req.query)
        
    })
    .then(data=>{
        res.locals.sanphamtheoloaichinh=data
        //res.send( res.locals.sanphamtheoloaichinh)
        return tintucController.toptintuc()
        
    })
    .then(data=>{
        res.locals.toptintuc=data
        res.render('loaispchinh');
        //res.send(res.locals.menu)
    })
    .catch(err=>{next(err)})

    
        
})

router.get('/:loaitong/:loaichinh',(req, res, next)=>{

    res.locals.linkloaitong=req.params.loaitong
    res.locals.linkloaichinh=req.params.loaichinh
    res.locals.laygiamax=parseInt(req.query.max)
    res.locals.laythuonghieu=parseInt(req.query.thuonghieu)
    res.locals.sapxep=req.query.sapxep;

    let menuController=require('../controllers/menuController.js')
    let khoanggiaController=require('../controllers/khoanggiaController.js')
    let thuonghieuController=require('../controllers/thuonghieuController')
    let loaichinhController=require('../controllers/sanphamController')
    let tintucController=require('../controllers/tintucController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return khoanggiaController.laykhoanggia(req.params, 1000000, 0, req.query)
    })
     
    .then(data=>{
        res.locals.khoanggia=data
        return khoanggiaController.laykhoanggia(req.params, 3000000, 1000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia2=data
        return khoanggiaController.laykhoanggia(req.params, 5000000, 3000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia3=data
        return khoanggiaController.laykhoanggia(req.params, 7000000, 5000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia4=data
        return khoanggiaController.laykhoanggia(req.params, 9000000, 7000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia5=data
        return khoanggiaController.laykhoanggia(req.params, 10000000, 9000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia6=data 
        return thuonghieuController.laythuonghieu(req.params, req.query)
    })
    .then(data=>{
        res.locals.thuonghieu=data
        return loaichinhController.layhetloaichinh(req.params, req.query)   
    })
    .then(data=>{        
        res.locals.loaitong=data
       
        return loaichinhController.laysanpham(req.params, req.query)
       
    })
    .then(data=>{
        res.locals.sanpham=data
         //res.send(data)
        return tintucController.toptintuc()
    })
    .then(data=>{
        res.locals.toptintuc=data;
        res.render('motloaisanpham');
    })
    .catch(err=>{next(err)}) 
})
router.get('/:loaitong/:loaichinh/:loaisanpham',(req, res, next)=>{

    res.locals.linkloaitong=req.params.loaitong
    res.locals.linkloaichinh=req.params.loaichinh
    res.locals.linkloaisanpham=req.params.loaisanpham
    res.locals.laythuonghieu=parseInt(req.query.thuonghieu)
    res.locals.laygiamax=parseInt(req.query.max)
    res.locals.sapxep=req.query.sapxep;


    let menuController=require('../controllers/menuController.js')
    let khoanggiaController=require('../controllers/khoanggiaController.js')
    let thuonghieuController=require('../controllers/thuonghieuController')
    let menuspchinhController=require('../controllers/sanphamController.js')
    let loaichinhController=require('../controllers/sanphamController')
    let tintucController=require('../controllers/tintucController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return khoanggiaController.laykhoanggia(req.params, 1000000, 0, req.query)
    })
     
    .then(data=>{
        res.locals.khoanggia=data
        return khoanggiaController.laykhoanggia(req.params, 3000000, 1000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia2=data
        return khoanggiaController.laykhoanggia(req.params, 5000000, 3000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia3=data
        return khoanggiaController.laykhoanggia(req.params, 7000000, 5000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia4=data
        return khoanggiaController.laykhoanggia(req.params, 9000000, 7000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia5=data
        return khoanggiaController.laykhoanggia(req.params, 10000000, 9000000, req.query)
    })
    .then(data=>{
        res.locals.khoanggia6=data 
        return thuonghieuController.laythuonghieu(req.params, req.query)
    })
    .then(data=>{
        res.locals.thuonghieu=data
        return thuonghieuController.laythuonghieu(req.params, req.query)
    })
    .then(data=>{
        res.locals.thuonghieu=data   
        return menuspchinhController.laymenuloaichinh(req.params)
    })
    .then(data=>{
        res.locals.menuspchinh=data
        return loaichinhController.locsanphamtheoloaisanpham(req.params)
    })
    .then(data=>{
        res.locals.loaitong=data
        return loaichinhController.laysanpham(req.params, req.query)
       
    })
    .then(data=>{
        res.locals.sanpham=data
        return menuspchinhController.laymenuloaisanpham(req.params)
    })
    .then(data=>{
        res.locals.menuloaisp=data
        return tintucController.toptintuc()
    })
    .then(data=>{
        res.locals.toptintuc=data
        res.render('motloaisanphamchinh')
    })
    .catch(err=>{next(err)}) 
    
})

router.get('/:loaitong/:loaichinh/:loaisanpham/:idsp',(req, res, next)=>{

    res.locals.linkloaitong=req.params.loaitong
    res.locals.linkloaichinh=req.params.loaichinh
    res.locals.linkloaisanpham=req.params.loaisanpham
    var idsp=req.params.idsp

    let menuController=require('../controllers/menuController.js')
    let menuspchinhController=require('../controllers/sanphamController.js')
    let commentController=require('../controllers/commentController.js')
    
    menuController
    .menu()
    .then(data =>{
        res.locals.menu=data
        return menuspchinhController.layluotxem(idsp)
    })
    .then(data =>{
        
        //res.locals.luotxem=data.luotxem.toString()
        menuspchinhController.themluotxem(idsp,data.luotxem)
        
    })
    .then(() =>{
        return menuspchinhController.lay1sanpham(req.params, req.query)
    })
    .then(data =>{
        data.file=fs.readFileSync(path.join(__dirname,`../public/data/sp/gioithieu/${idsp%10+1}.txt`),'utf8')
        res.locals.motsanpham=data
        return menuspchinhController.luotxemnhieunhat()
    })
    .then(data =>{
        res.locals.luotxemcaonhat=data;
        return commentController.laycomments(req.params.idsp)
        
    })
    .then(data =>{
        res.locals.comment=data
        res.render('motsanpham')
        //res.send(res.locals.motsanpham.file)
    })
    .catch(err=>{next(err)}) 
    


    
    
})

module.exports=router;