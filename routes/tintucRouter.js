let express=require('express')
let router=express.Router()
let fs = require('fs')
let path = require('path')

router.get('/', (req, res, next) => {
    let menuController=require('../controllers/menuController.js')
    let tlbaivietController=require('../controllers/tintucController')
    let sanphamController=require('../controllers/sanphamController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return tlbaivietController.tatcatheloai()
    })
    .then(data =>{
        res.locals.tlbaiviets=data;
        
        return sanphamController.luotxemnhieunhat()
    })
    .then(data=>{
        res.locals.luotxemcaonhat=data
        return tlbaivietController.toptintuc()
        //res.send(res.locals.tlbaiviets)
    })
    .then(data =>{
        res.locals.toptintuc=data
        res.render('tintuc')
    })
    .catch(err =>next(err))
    
    //
})
router.get('/theloaitt:idtheloai', (req, res, next) => {
    let menuController=require('../controllers/menuController.js')
    let sanphamController=require('../controllers/sanphamController')
    var theloaitt=req.params.idtheloai;
    let tlbaivietController=require('../controllers/tintucController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return tlbaivietController.motloaitintuc(theloaitt)
    })
    .then(data =>{
        res.locals.mottheloai=data
        return sanphamController.luotxemnhieunhat()
        
    })
    .then(data=>{
        res.locals.luotxemcaonhat=data
        return tlbaivietController.toptintuc()
        
    })
    .then(data=>{
        res.locals.toptintuc=data
        res.render('motloaitintuc')
    })
    .catch(err=>next(err))
    
})
router.get('/theloaitt:idtheloai/:idbaiviet', (req, res, next) => {
    let menuController=require('../controllers/menuController.js')
    
    let tlbaivietController=require('../controllers/tintucController')
    let sanphamController=require('../controllers/sanphamController')
    menuController
    .menu()
    .then(data=>{
        res.locals.menu=data
        return tlbaivietController.motbaiviet(req.params)
    })
    .then(data=>{
         data.file=fs.readFileSync(path.join(__dirname,`../public/data/tintuc/${req.params.idtheloai}/${req.params.idbaiviet}.txt`),'utf8')
        res.locals.motbaiviet=data
        
        return sanphamController.luotxemnhieunhat()
        
    })
    .then(data=>{
        res.locals.luotxemcaonhat=data
        return tlbaivietController.layluotxem(req.params)
        
    .then(data=>{
        res.locals.luotxem=data
        tlbaivietController.themluotxem(req.params, data.luotxem) 
        return tlbaivietController.toptintuc()
    })
    .then(data=>{
        res.locals.toptintuc=data
        return tlbaivietController.tinlienquan(req.params)
        
    })
    .then(data=>{
        res.locals.tinlienquan=data
        res.render('motbaiviet')
    })
    
    .catch(err=>next(err))
})  
          
        
    
})

module.exports=router;